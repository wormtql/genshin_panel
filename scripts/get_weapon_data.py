import requests
from bs4 import BeautifulSoup
import json
import sys


url = sys.argv[1]
# url = "https://wiki.biligame.com/ys/%E9%A3%9E%E5%A4%A9%E5%BE%A1%E5%89%91"
r = requests.get(url)
if r.status_code != 200:
    print("error")
    sys.exit(0)

soup = BeautifulSoup(r.text, "html.parser")

temp = soup.find_all("table", attrs={"class": "wikitable"})
for i in temp:
    row1 = i.tbody.find_all("tr")[0]
    if "基础攻击力" in row1.text:
        temp = i
        break
tbody = temp.tbody

tupo = {
        "攻击力加成": "attackPercentage",
        "攻击力": "attackPercentage",
        "元素充能": "recharge",
        "元素充能效率": "recharge",
        "元素精通": "elementalMastery",
        "治疗加成": "cureEffect",
        "暴击伤害": "criticalDamage",
        "暴击率": "critical",
        "攻击力%": "attackPercentage",
        "百分比攻击力": "attackPercentage",
        "冰元素伤害加成": "iceBonus",
        "岩元素伤害加成": "rockBonus",
        "雷元素伤害加成": "thunderBonus",
        "水元素伤害加成": "waterBonus",
        "风元素伤害加成": "windBonus",
        "物理伤害加成": "physicalBonus",
        "防御力加成": "defendPercentage",
        "防御力": "defendPercentage",
        "生命值加成": "lifePercentage",
        "生命": "lifePercentage",
        "生命值": "lifePercentage",
        }
tupo_name = tupo[tbody.find_all("tr")[0].find_all("th")[-1].text.strip()]
trs = tbody.find_all("tr")

def convert_percentage(value):
    if "%" in value:
        return float(value[:-1]) / 100
    return float(value)



ans = {}
t = trs[2].find_all("td")
ans["1"] = {
    "primary": {
        "attack": int(t[1].text),
        },
    "secondary": {
        
        }
    }
level20_tupo = convert_percentage(t[2].text.strip())
ans["1"]["secondary"][tupo_name] = level20_tupo


levels = ["20-", "20+", "40-", "40+", "50-", "50+", "60-", "60+", "70-", "70+", "80-", "80+", "90"]
for i in range(13):
    is_break = i % 2
    index = i // 2 + 3
    t = trs[index].find_all("td")
    ans[levels[i]] = {
        "primary": {
            "attack": int(t[1 + is_break].text),
            },
        "secondary": {}
        }
    ans[levels[i]]["secondary"][tupo_name] = convert_percentage(t[3].text.strip())

print(json.dumps(ans, indent=4))
