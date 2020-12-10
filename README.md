# 《原神》面板计算器
[![Build Status](https://travis-ci.org/wormtql/genshin_panel.svg?branch=main)](https://travis-ci.org/wormtql/genshin_panel)  

模拟角色、装备、圣遗物的搭配，得出最终面板。

注：最终面板与实际面板有出入，这是因为游戏中的圣遗物只保留到小数点后一位，实际上这之后的小数位数并不是零。  
最终结果仅有非常小的差别，可以忽略不计

目前支持的数据预设有限，但是可以根据自己的角色自己构造基本面板。

更多角色与武器正在更新中


## 安装，install
```bash
npm install genshin_panel
```


## 文档，documentation
[https://wormtql.gitbook.io/genshin-panel-doc/](https://wormtql.gitbook.io/genshin-panel-doc/)


## 基本使用，basic usage
```js
const genshin = require("genshin_panel");

// 刻晴70级未突破，黑剑70级未突破，无圣遗物
let attribute = genshin.compose("keqing-70-0", "heijian-70-0");

// 刻晴70级未突破，黎明神剑70级突破，无圣遗物
let attribute2 = genshin.compose("keqing-70-0", "limingshenjian-70-1");
```


## 添加圣遗物，add artifacts
```js
const genshin = require("genshin_panel");

let art = {
    position: "flower",             // 生之花
    setName: "berserker",           // 战狂
    primary: {
        "life1": 645
    },
    secondary: {
        "criticalDamage": 0.044,
        "elementalMastery": 15,
        "defend2": 0.053,
    }
};

let attribute = genshin.compose("keqing-70-0", "heijian-70-0", [art]);
```


## 自定义基础面板，custom
```js
const genshin = require("genshin_panel");

let weapon = {
    primary: {
        attack: 100,
    },
    secondary: {
        critical: 0.2,
    }
};

let attribute = genshin.compose("keqing-70-0", weapon);
```