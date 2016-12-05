import urllib.parse
import urllib.request
from bs4 import BeautifulSoup
import dota2api
from openpyxl.compat import range
import math
import scipy
import csv
import time
import pandas as pd


class Dota(object):
    def __init__(self):
        data_max = open('name_dotamax.txt', 'r')
        data_buff = open('name_dotabuff.txt', 'r')
        self.hero_max, self.hero_buff, self.hero_trans = [], [], {}
        for hero in data_max:
            self.hero_max.append(hero[:-1])
        for hero in data_buff:
            self.hero_buff.append(hero[:-1])
        for i in range(len(self.hero_max)):
            self.hero_trans[self.hero_max[i]] = self.hero_buff[i]

    def transToChinese(self, inputBytes):
        zhcnUnicodeStr = inputBytes.decode("UTF-8")
        return zhcnUnicodeStr

    def getHtml(self, url):
        req = urllib.request.Request(url)
        req.add_header('User-Agent',
                       'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11')
        response = urllib.request.urlopen(req)
        html = response.read()
        html = self.transToChinese(html)
        return html

    def searchMatch(self, matchId):
        url = 'http://www.dotabuff.com/matches/' + matchId
        html = self.getHtml(url)

        result = '0'  # result = 0, radiant win, result = 1, dire win.
        if html.find('Dire Victory') != -1:
            result = '1'
        # filter the match
        idx = html.find('Skill Bracket')
        lobby = html[html.find('<dd>', idx) + 4:html.find('</dd>', idx)]
        if lobby != 'Normal' and lobby != 'Ranked':
            return None
        idx = html.find('Lobby Type', idx)
        mode = html[html.find('<dd>', idx) + 4:html.find('</dd>', idx)]
        if mode != "All Pick" and mode != 'Random Draft':
            return None
        idx = html.find('Region')
        duration = float(html[html.find('<dd>', idx) + 4:html.find(':', idx)])
        if duration <= 15:
            return None

        idx = html.find('header-content-secondary')
        level = html[html.find('<dd>', idx) + 4:html.find(' Skill', idx)]
        hero = []
        idx = 0
        for side in ('radiant', 'dire'):
            i = 0
            while i < 5:
                idx = html.find('faction-' + side, idx)
                idx2 = html.find('heroes', idx)
                newHero = html[html.find('/', idx2) + 1:html.find('"', idx2)]
                if (not hero or newHero != hero[-1]) and '/' not in newHero:
                    hero.append(newHero)
                    i += 1
                idx += 1
        return [matchId, result, level] + hero

    def searchAntiAndCombo(self, hero):
        outputAnti = open('coefficient/' + self.hero_trans[hero] + '-A.csv', 'w')
        outputAnti.write('hero,para,rate,matches\n')
        outputCombo = open('coefficient/' + self.hero_trans[hero] + '-C.csv', 'w')
        outputCombo.write('hero,para,rate,matches\n')
        url_anti = "http://www.dotamax.com/hero/detail/match_up_anti/" + hero
        html_1 = self.getHtml(url_anti)
        url_combo = "http://www.dotamax.com/hero/detail/match_up_comb/" + hero
        html_2 = self.getHtml(url_combo)
        print(hero)
        anti = []
        combo = []
        for i in range(2):
            html = (html_1, html_2)[i]
            idx = html.find('指数')
            pair = combo if i else anti

            while True:
                idx = html.find('/hero/detail/', idx)
                if idx == -1:
                    break
                heroName = html[html.find('l/', idx) + 2:html.find('"', idx)].strip('/')
                advtangeData = []
                idx2 = idx
                while len(advtangeData) < 3:

                    idx2 = html.find('10px', idx2 + 1)
                    tmp = html[html.find('>', idx2) + 1:html.find('<', idx2)].strip('%')
                    if len(tmp) > 2:
                        advtangeData.append(tmp)
                idx += 1
                pair.append([self.hero_trans[heroName]] + advtangeData)
        anti.sort(key=lambda i: -float(i[1]))
        combo.sort(key=lambda i: -float(i[1]))
        for line in anti:
            outputAnti.write(','.join(line) + '\n')
        for line in combo:
            outputCombo.write(','.join(line) + '\n')
        return anti, combo

    def laneData(self):
        data = open('lane.csv', 'r')
        output = open('lane_final.csv', 'w')
        count = 0
        for line in data:
            lane = float(line.strip())
            hero = self.hero_buff[count]
            print(hero)
            url = 'http://www.dotabuff.com/heroes/' + hero
            html = self.getHtml(url)
            idx = html.find('span', html.find('Popularity'))
            baseRate = float(html[html.find('>', idx) + 1:html.find('<', idx) - 1])
            adjLane = []
            freqSet = []
            laneName = ['Mid Lane', 'Safe Lane', 'Off Lane', 'Jungle']
            for i in laneName:
                idx = html.find(i)
                try:
                    idx = html.find('data-value', idx)
                    freq = float(html[html.find('"', idx) + 1:html.find('>', idx) - 1])
                    idx = html.find('data-value', idx + 1)
                    rate = float(html[html.find('"', idx) + 1:html.find('>', idx) - 1])
                    adjLane.append(str(round((rate / baseRate) ** 2 * lane, 2)))
                    freqSet.append(freq)
                except:
                    adjLane.append('0')
                    freqSet.append(0)
            output.write(','.join([hero] + adjLane + [laneName[freqSet.index(max(freqSet))], str(lane)]) + '\n')

            count += 1

    def dpsAndPush(self):
        output = open('DPS&Push.csv', 'w')
        url = 'http://www.dotabuff.com/heroes/damage'
        html = self.getHtml(url)
        start = html.find('Tower')
        dpsSet = []
        pushSet = []
        for hero in self.hero_buff:
            print(hero)
            idx = html.find('data-value', html.find(hero, start))
            dps = float(html[html.find('"', idx) + 1:html.find('>', idx) - 1])
            idx = html.find('data-value', idx + 1)
            push = float(html[html.find('"', idx) + 1:html.find('>', idx) - 1])
            dpsSet.append(dps)
            pushSet.append(push)
        dpsBase = 125
        dpsScale = 10 / math.log(max(dpsSet) / dpsBase)
        pushBase = 4
        pushScale = 10 / math.log(max(pushSet) / pushBase)
        for i in range(len(self.hero_buff)):
            output.write(','.join([self.hero_buff[i], str(round(math.log(dpsSet[i] / dpsBase) * dpsScale, 2)),
                                   str(round(math.log(pushSet[i] / pushBase) * pushScale, 2))]) + '\n')

    def dataCollect(self):

        # for hero in self.hero_max:
        #     anti, combo = self.searchAntiAndCombo(hero)
        print(self.searchMatch('2734918039'))


if __name__ == '__main__':

    a = Dota()
    # a.dpsAndPush()
    # a.laneData()
    # data_max = open('name_dotamax.txt', 'r')
    # for hero in data_max:
    #     a.searchAntiAndCombo(hero[:-1])
    #
    # matchId = 2765121903  # newest = 2772302096
    # count = 20000
    # file = 'matches/match'
    # fileNumber = 94
    # i = 0
    # output = open(file + str(fileNumber) + '.csv', 'w')
    # writer = csv.writer(output)
    # for id in range(matchId, matchId + count):
    #     print(id)
    #     if i == 1000:
    #         fileNumber += 1
    #         output = open(file + str(fileNumber) + '.csv', 'w')
    #         writer = csv.writer(output)
    #         i = 0
    #     if not (id) % 400:
    #         writer = csv.writer(output)
    #     try:
    #         tmp = a.searchMatch(str(id))
    #     except Exception as e:
    #         print(e)
    #         if 'Throttled' in str(e):
    #             time.sleep(600)
    #         continue
    #     if tmp:
    #         print(tmp)
    #         writer.writerow(tmp)
    #         i += 1
    a.laneData()