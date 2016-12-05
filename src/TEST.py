# data = open('raw_name_collect.txt', 'r')
# output = open('name_dotamax.txt', 'w')
# for line in data:
#     output.write('_'.join(line.split()).lower()+'\n')
import dota2api
import json
import pandas as pd
import numpy as np

pd.options.display.max_rows = 10000

a = pd.read_csv('attributions.csv', index_col='hero')
a.columns.name = 'attr'
b = a['healing']
print(a.drop('dps', axis= 1).columns)
print(a.columns)
print(a.ix[[0, 2], [1,2]])
print(b.rank(method='max'))