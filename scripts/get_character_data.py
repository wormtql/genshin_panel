import requests
from bs4 import BeautifulSoup
import json
import sys


url = sys.argv[1]
r = requests.get(url)
if r.status_code != 200:
    print("error")
    sys.exit(0)

soup = BeautifulSoup(r.text, "html.parser")

temp = soup.find_all("table", attrs={"class": "wikitable"})
for i in temp:
    if "突破前" in i.text:
        tbody = i.tbody
        break

trs = tbody.find_all("tr")
tds = [row.find_all("td") for row in trs]

ans = {
    "life": [int(tds[2][1].text)],
    "attack": [int(tds[2][2].text)],
    "defend": [int(tds[2][3].text)]
}

for i in range(6):
    ans["life"].append(int(tds[3 + i][1].text))
    ans["life"].append(int(tds[3 + i][2].text))
    ans["attack"].append(int(tds[3 + i][3].text))
    ans["attack"].append(int(tds[3 + i][4].text))
    ans["defend"].append(int(tds[3 + i][5].text))
    ans["defend"].append(int(tds[3 + i][6].text))

ans["life"].append(int(tds[9][1].text))
ans["attack"].append(int(tds[9][3].text))
ans["defend"].append(int(tds[9][5].text))

def f(arr):
    print("[", end="")
    for i in range(len(arr) - 1):
        print(arr[i], end="")
        print(", ", end="")
    print(arr[-1], "]", sep="", end="")


print("life: ", end="")
f(ans["life"])
print(",")
print("attack: ", end="")
f(ans["attack"])
print(",")
print("defend: ", end="")
f(ans["defend"])
print(",")