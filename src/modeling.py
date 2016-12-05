from scipy.stats import norm
import scipy.optimize as spo
import pandas as pd
import scipy.optimize as spo
import numpy as np
import math
import time
import matplotlib.pyplot as plt


def probability(weight, result):
    confirm = [0, 6.0, 25.8]
    problog = 0
    for id in result.index:
        # mu = sum([weight[i] * result.ix[id][i + 1] for i in range(len(weight))] + [
        #     confirm[i] * result.ix[id][i + 1 + len(weight)] for i in range(len(confirm) - 1)])
        mu = sum([weight[i] * result.ix[id][i + 1] for i in range(len(weight)-1)])
        prob = abs(norm.cdf(-mu / result.ix[id]['var'] / weight[-1]) - 1 + result.ix[id]['result'])
        if prob:
            problog += math.log(prob)
        else:
            problog -= 714.33
    return -problog


def evaluation(weight, testDf, count, threshold):
    bucket = [[0, 0] for i in range(count)]
    for id in testDf.index:
        mu = sum([weight[i] * testDf.ix[id][i + 1] for i in range(len(weight) - 1)])
        prob = 1 - norm.cdf(-mu / testDf.ix[id]['var'] / weight[-1])
        winSide = 0
        if prob < 0.5:
            prob = 1 - prob
            winSide = 1
        num = math.ceil((prob - 0.5) / (0.5 / count)) - 1
        # if num == len(bucket) - 1:
        #     print(id, winSide)
        #     print(testDf.ix[id])

        bucket[num][1] += 1
        if testDf.ix[id]['result'] == winSide:
            bucket[num][0] += 1


    ans = [[i[0] / i[1], i[1]] if i[1] else [0, 0] for i in bucket]
    error = 0
    for i in range(len(ans)):
        if ans[i][1] > threshold:
            error += (ans[i][0]*100-50-50/count*(i+0.5))**2*ans[i][1]/testDf.shape[0]
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
    theta = 2 / (1 + math.exp((lane[1] - lane[0]) / 3.5))
    print(theta)
    return theta


def matchData(df, matches):
    result = pd.DataFrame(0.0, index=matches.index,
                          columns=['result', 'dps', 'push', 'nuke', 'durable', 'disable', 'initial', 'healing', 'ac',
                                   'var'])
    for id, line in matches.iterrows():
        print(id)
        result.ix[id]['result'] = line['result']
        radiant = list(line[2:7])
        dire = list(line[7:])
        # theta: based on lane abilities
        theta = getTheta(df, radiant[:], dire[:])
        radiantPara = []
        direPara = []
        for col in ['dps', 'push', 'nuke', 'durable', 'disable', 'initial', 'healing']:
            radiantDetail = sorted([df.ix[hero][col] for hero in radiant], key=lambda i: -i)
            direDetail = sorted([df.ix[hero][col] for hero in dire], key=lambda i: -i)
            if col == 'disable':
                para = [1, 1, 1]
                theta = 1
            elif col == 'initial' or col == 'healing':
                para = [0.75, 0.25]
            else:
                para = [1.5, 1.5, 1.1, 0.2, 0.2]
            radiantPara.append(sum([para[i] * radiantDetail[i] * theta for i in range(len(para))]) / sum(para))
            direPara.append(sum([para[i] * direDetail[i] * theta for i in range(len(para))]) / sum(para))
            tmp = sum(
                [para[i] * (radiantDetail[i] * theta - direDetail[i] * (2 - theta)) for i in range(len(para))]) / sum(
                para)
            result.ix[id][col] = tmp
        # var:
        result.ix[id]['var'] = (pd.Series(direPara[:]).std() ** 2 + pd.Series(radiantPara[:]).std() ** 2) ** 0.5
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
        result.ix[id]['ac'] = sr[0] - sr[1]
        print(sr)
        print(result.ix[id], '\n')

    print('\n')
    return result


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
    weight = [1.0] * 8 +[15.0]
    bounds = [(0.0, None)] * 9
    constraint = {'type': 'eq', 'fun': lambda weight: sum(weight[:-1]) - 8}
    df = pd.read_csv('attributions.csv', index_col='hero')
    skill = 'normal'


    # training data transfer
    # matches = pd.read_csv('matches/'+skill+'/match_'+skill+'sample.csv', index_col='id')
    # result = matchData(df, matches)
    # result.to_csv('matches/'+skill+'/result3.csv')
    #
    # training
    # result = pd.read_csv('matches/'+skill+'/result2.csv', index_col='id')
    # ans = spo.minimize(probability, weight, args=(result,), bounds=bounds, constraints=constraint,
    #                 method='SLSQP', options={'disp': True})
    #
    # weight = ans.x
    # print('weight:', ','.join(map(str, weight)))

    # test data transfer
    # testFile = pd.read_csv('matches/' + skill + '/match_' + skill + '.csv', index_col='id')
    # testDf = matchData(df, testFile)
    # testDf.to_csv('matches/' + skill + '/result.csv')

    # test
    weight = [0.5, 0.5, 0.5, 0.5, 0.0, 0.0, 0.0, 6, 25.8172834189]
    # # weight = [3,0.5,0.5,0.5,0.5,0.5,0.56513913402,3.4308158856,14.8547506289]
    # # weight = [0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 5.5, 25.8172834189]
    testDf = pd.read_csv('matches/' + skill + '/result3.csv', index_col='id')
    count = 25
    evaluation(weight, testDf, count, 25)

    print('time consuming:', time.clock()-start)
