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
import numpy as np

def aggregate():
    normal = open('matches/normal/match_normal.csv', 'w')
    high = open('matches/high/match_high.csv', 'w')
    veryhigh = open('matches/veryhigh/match_veryhigh.csv', 'w')
    all = open('matches/all/match_all.csv', 'w')
    for i in normal, high, veryhigh, all:
        i.write('id,result,skill,1,2,3,4,5,6,7,8,9,10\n')
    for i in range(10, 98):
        try:
            file = open('matches/match'+str(i)+'.csv', 'r')
        except:
            continue
        for line in file:
            data = line.split(',')
            if data[2] == 'Normal':
                normal.write(','.join(data))
            elif data[2] == 'High':
                high.write(','.join(data))
            elif data[2] == 'Very High':
                veryhigh.write(','.join(data))
            if data[0] != 'id':
                all.write(','.join(data))
def transform():
    data_buff = open('name_dotabuff.txt', 'r')
    file = pd.read_csv('attributions.csv', index_col='hero')
    output = pd.DataFrame(0.0, index=file.index, columns=file.index)
    for hero in file.index:
        anti = pd.read_csv('coefficient/'+hero+'-A.csv', index_col='hero')
        # combo = pd.read_csv('coefficient/' + hero + '-C.csv', index_col='hero')
        for cmp in file.index:
            if cmp != hero:
                output.ix[cmp][hero] = anti.ix[cmp]['rate']
    output.to_json('heroVsHeroWinRate.json')
    print(output)

def noise():
    data = pd.read_csv('attributions.csv', index_col='hero')
    noises = pd.DataFrame((np.random.rand(data.shape[0], 5)-0.5)/10, index=data.index, columns=data.columns[-5:])
    data[data.columns[-5:]] = data[data.columns[-5:]]-noises
    data[data.columns[-5:]] = data[data.columns[-5:]].applymap(lambda i: round(i, 2))
    data.to_csv('newattributions.csv')
    print(data)

if __name__ == '__main__':
    # file = pd.read_csv('winRate.csv', index_col='hero')
    # file.to_json('winRate.json')
    noise()