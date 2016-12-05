from scipy.stats import norm
import scipy.optimize as spo
import pandas as pd
import scipy.optimize as spo
import numpy as np
import math
import time
import matplotlib.pyplot as plt


def probability(weight, result1, result2, logLike):
    problog = 0
    for id in result1.index:
        # mu = sum([weight[i] * result.ix[id][i + 1] for i in range(len(weight))] + [
        #     confirm[i] * result.ix[id][i + 1 + len(weight)] for i in range(len(confirm) - 1)])
        theta = 2 / (1 + math.exp(-result1.ix[id]['theta'] / weight[-1]))
        mu = sum([weight[i] * (theta*result1.ix[id][i + 1]-(2-theta)*result2.ix[id][i + 1]) for i in range(len(weight)-2)])
        prob = abs(norm.cdf(- mu / result1.ix[id]['var'] / weight[-2]) - 1 + result1.ix[id]['result'])
        if prob:
            problog += math.log(prob)
        else:
            problog -= 714.33
    logLike.append(problog)
    return -problog


def evaluation(weight, testDf1, testDf2, count, threshold):
    bucket = [[0, 0] for i in range(count)]
    for id in testDf1.index:
        theta = 2 / (1 + math.exp(-testDf1.ix[id]['theta'] / weight[-1]))
        mu = sum([weight[i] * (theta*testDf1.ix[id][i + 1]-(2-theta)*testDf2.ix[id][i + 1]) for i in range(len(weight)-2)])
        prob = abs(norm.cdf(- mu / testDf1.ix[id]['var'] / weight[-2]) - 1)
        winSide = 0
        if prob < 0.5:
            prob = 1 - prob
            winSide = 1
        num = math.ceil((prob - 0.5) / (0.5 / count)) - 1
        # if num == len(bucket) - 1:
        #     print(id, winSide)
        #     print(testDf1.ix[id])

        bucket[num][1] += 1
        if testDf1.ix[id]['result'] == winSide:
            bucket[num][0] += 1


    ans = [[i[0] / i[1], i[1]] if i[1] else [0, 0] for i in bucket]
    error = 0
    total = 0
    for i in range(len(ans)):
        if ans[i][1] > threshold:
            error += (ans[i][0]*100-50-50/count*(i+0.5))**2*ans[i][1]
            total += ans[i][1]
    error /= total
    print(ans)
    print('error: ', error)
    plotWinRate(ans, 2 * count, threshold)
    plotMatches(ans, 2 * count)
    return ans


def getTheta(df, radiant, dire):
    lane = []
    for side in radiant, dire:
        try:
            laneRMid = max([df.ix[hero]['midlane'] for hero in side if df.ix[hero]['perfer'] == 'Mid Lane'])
            k = 1
        except:
            laneRMid = max([df.ix[hero]['midlane'] for hero in side])
            k = 0.85
        for hero in side:
            if df.ix[hero]['midlane'] == laneRMid:
                side.remove(hero)
                break
        laneRMid *= k
        laneRSide = [(df.ix[hero]['safelane'], df.ix[hero]['offlane']) for hero in side]
        laneRSide = max(
            [laneRSide[0][i] + laneRSide[1][j] + laneRSide[2][p] + laneRSide[3][q] for i in (0, 1) for j in (0, 1) for p
             in (0, 1) for q in (0, 1) if i + j + p + q == 2])
        lane1 = (laneRMid + laneRSide) / 5
        laneRSide = sorted(
            [(df.ix[hero]['jungle'], df.ix[hero]['safelane'], df.ix[hero]['offlane']) for hero in side])
        lane2 = laneRSide[-1][0] * 1.3 + laneRMid
        laneRSide.pop()
        laneRSide.sort(key=lambda i: i[2])
        lane2 = (lane2 + laneRSide[0][1] + laneRSide[1][1] + laneRSide[2][2] * 0.7) / 5
        lane.append(max(lane1, lane2))
    theta = lane[0] - lane[1]
    print(theta)
    return theta


def matchData(df, matches):
    result1 = pd.DataFrame(0.0, index=matches.index,
                          columns=['result', 'dps', 'push', 'nuke', 'durable', 'disable', 'initial', 'healing', 'ac',
                                   'var', 'theta'])
    result2 = pd.DataFrame(0.0, index=matches.index,
                           columns=['result', 'dps', 'push', 'nuke', 'durable', 'disable', 'initial', 'healing', 'ac',
                                    'var', 'theta'])
    for id, line in matches.iterrows():
        print(id)
        result1.ix[id]['result'] = line['result']
        radiant = list(line[2:7])
        dire = list(line[7:])
        # theta: based on lane abilities
        theta = getTheta(df, radiant[:], dire[:])
        result1.ix[id]['theta'] = theta
        radiantPara = []
        direPara = []
        for col in ['dps', 'push', 'nuke', 'durable', 'disable', 'initial', 'healing']:
            radiantDetail = sorted([df.ix[hero][col] for hero in radiant], key=lambda i: -i)
            direDetail = sorted([df.ix[hero][col] for hero in dire], key=lambda i: -i)
            if col == 'disable':
                para = [1, 1, 1]
            elif col == 'initial' or col == 'healing':
                para = [0.75, 0.25]
            else:
                para = [1.5, 1.5, 1.1, 0.2, 0.2]
            radiantPara.append(sum([para[i] * radiantDetail[i] for i in range(len(para))]) / sum(para))
            direPara.append(sum([para[i] * direDetail[i] for i in range(len(para))]) / sum(para))
            tmp1 = sum([para[i] * radiantDetail[i] for i in range(len(para))]) / sum(para)
            tmp2 = sum([para[i] * direDetail[i] for i in range(len(para))]) / sum(para)
            result1.ix[id][col] = tmp1
            result2.ix[id][col] = tmp2
        # var:
        result1.ix[id]['var'] = (pd.Series(direPara[:]).std() ** 2 + pd.Series(radiantPara[:]).std() ** 2) ** 0.5
        # anti & combo: (可以在这里加对var的修正）
        sr = []
        for side in radiant, dire:
            srAlly = []
            srEnemy = []
            for hero in side:
                fileA = pd.read_csv('coefficient/' + hero + '-A.csv', index_col='hero')
                fileC = pd.read_csv('coefficient/' + hero + '-C.csv', index_col='hero')
                ally = []
                enemy = []
                for cmp in radiant + dire:
                    if cmp != hero:
                        if cmp in side:
                            ally.append(fileC.ix[cmp]['para'])
                        else:
                            enemy.append(fileA.ix[cmp]['para'])
                ally = pd.Series(ally)
                enemy = pd.Series(enemy)
                srAlly.append(ally.mean() / ally.std())
                srEnemy.append(enemy.mean() / ally.std())
            srEnemy = pd.Series(srEnemy)
            srAlly = pd.Series(srAlly)
            sr.append(srAlly.mean() / srAlly.std() + srEnemy.mean() / srEnemy.std())
        result1.ix[id]['ac'] = sr[0] - sr[1]
        print(sr)
        print(result1.ix[id], '\n')

    print('\n')
    return result1, result2


def plotWinRate(y, count, threshold):
    y1 = [(1 - i[0]) * 100 if i[1] > threshold else 0 for i in y[::-1]]
    y2 = [i[0] * 100 if i[1] > threshold else 0 for i in y]
    y = y1 + y2
    # y2 = [50 + 50/count*(i+0.5) for i in range(count)]
    y2 = [100 / count * (i + 0.5) for i in range(count)]
    plt.subplots()
    index = np.arange(count)
    bar_width = 0.35
    opacity = 0.4
    plt.bar(index, y, bar_width, alpha=opacity, color='b', label='Actual Win Rate')
    plt.bar(index + bar_width, y2, bar_width, alpha=opacity, color='r', label='Predicted Win Rate')
    plt.ylabel('Win Rate Bucket')
    plt.xlabel('Win Rate')
    plt.title('Dota Win Rate Prediction')
    # plt.xticks(index + bar_width, [50 + 50/count*i for i in range(count)])
    plt.xticks(index + bar_width, [int(100 / count * i) for i in range(count)])
    plt.ylim(0, 100)
    plt.legend(loc=2)
    plt.tight_layout()
    plt.show()


def plotMatches(y, count):
    y = [i[1] for i in y[::-1]] + [i[1] for i in y]
    plt.subplots()
    index = np.arange(count)
    bar_width = 0.35
    opacity = 0.4
    plt.bar(index, y, bar_width, alpha=opacity, color='b')
    plt.ylabel('Number of Matches')
    plt.xlabel('Win Rate')
    plt.title('Dota Win Rate Bucket Samples')
    # plt.xticks(index + bar_width, [50 + 50/count*i for i in range(count)])
    plt.xticks(index + bar_width, [int(100 / count * i) for i in range(count)])
    plt.tight_layout()
    plt.show()



if __name__ == '__main__':
    start = time.clock()
    weight = [1.0] * 8 +[25.0]+[3.5]
    bounds = [(0.1, None)] * 10
    constraint = {'type': 'eq', 'fun': lambda weight: sum(weight[:-2]) - 8}
    df = pd.read_csv('attributions.csv', index_col='hero')
    skill = 'high'

    def transfer():
        matches = pd.read_csv('matches/'+skill+'/match_'+skill+'.csv', index_col='id')
        result1, result2 = matchData(df, matches)
        result1.to_csv('matches/'+skill+'/result_1.csv')
        result2.to_csv('matches/' + skill + '/result_2.csv')

    def training(weight):
        result1 = pd.read_csv('matches/'+skill+'/result_1.csv', index_col='id')
        result2 = pd.read_csv('matches/' + skill + '/result_2.csv', index_col='id')
        logLike = []
        ans = spo.minimize(probability, weight, args=(result1, result2, logLike), bounds=bounds, constraints=constraint,
                        method='SLSQP', options={'disp': True})

        weight = ans.x

        text = pd.Series(logLike)
        text.to_csv('loglike.csv')
        print('weight:', ','.join(map(str, weight)))

    def test():
        # weight = [0.5, 0.5, 0.5, 0.5, 0.0, 0.0, 0.0, 6, 25.8172834189]
        # # weight = [3,0.5,0.5,0.5,0.5,0.5,0.56513913402,3.4308158856,14.8547506289]
        # # weight = [0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 5.5, 25.8172834189]
        weight = [3.04639292022, 0.1, 0.1, 0.1, 0.113614242375, 0.1, 0.617461336455, 3.82253150095, 12.6568574805,
                788.669069516]
        testDf1 = pd.read_csv('matches/' + skill + '/result_1.csv', index_col='id')
        testDf2 = pd.read_csv('matches/' + skill + '/result_2.csv', index_col='id')
        count = 25
        evaluation(weight, testDf1, testDf2, count, 20)

    # transfer()
    training(weight)
    # test()
    print('time consuming:', time.clock()-start)

    # veryhigh = [1.94510112076,0.1,0.1,0.98612743936,0.1,0.1,0.699445303566,3.96932613631,14.489694369,439.0482242]
    # high = [3.04639292022,0.1,0.1,0.1,0.113614242375,0.1,0.617461336455,3.82253150095,14.6568574805,788.669069516]
    # normal = []