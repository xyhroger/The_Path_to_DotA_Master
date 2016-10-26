import urllib.request 
f = open("/Users/Jingfan_Pro/Desktop/name.txt", 'r')
f2 = open("/Users/Jingfan_Pro/Desktop/name_url.txt", 'r')
length = 0
for line in f:
    length = length + 1
print(length)
##for url in f2:
##    url = url.strip('\n')
##    url = url.strip(' ')
##    url = url.strip('\t')
##    if url[0] == ' ':
##        continue
##    print(url)
##    line = f.readline()
##    line=line.strip('\n')
##    start = url.index('"') + 1
##    end = url.index('"', 16)          
##    url = url[start: end]
##    name = url
####    print(line)
####    print("downloading with urllib")
##    url = 'http://cdn.dota2.com/apps/dota2/images/heroes/' + url + '_vert.jpg'
##    print(url)
##    print(name)
##    try:
##        urllib.request.urlretrieve(url, "/Users/Jingfan_Pro/Desktop/hero_img/" + name + '.jpg')
##    except:
##        print('404 Not Found')
##        continue
####    print(line + '\n', end = '')
####    f2.write(line + '\n')
f.close()
f2.close()
