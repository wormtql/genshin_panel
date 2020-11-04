# 《原神》面板计算器
[![Build Status](https://travis-ci.org/wormtql/genshin_panel.svg?branch=main)](https://travis-ci.org/wormtql/genshin_panel)  

模拟角色、装备、圣遗物的搭配，得出最终面板。

注：最终面板与实际面板有出入，这是因为游戏中的圣遗物只保留到小数点后一位，实际上这之后的小数位数并不是零。  
最终结果仅有非常小的差别，可以忽略不计

目前支持的数据预设有限，但是可以根据自己的角色自己构造基本面板。

更多角色与武器正在更新中

## 安装
```bash
npm install genshin_panel
```

## 基本使用
```js
const genshin = require("genshin_panel");

// 刻晴70级未突破，黑剑70级未突破，无圣遗物
let attribute = genshin.compose("keqing-70-0", "heijian-70-0");

// 刻晴70级未突破，黎明神剑70级突破，无圣遗物
let attribute2 = genshin.compose("keqing-70-0", "limingshenjian-70-1");
```

## 添加圣遗物：
```js
const genshin = require("genshin_panel");

let art = {
    position: "flower",
    setName: "berserker", // 战狂
    primary: {
        tag: "life1",
        value: 645,
    },
    secondary: [
        {
            tag: "criticalDamage",
            value: 0.044,
        },
        {
            tag: "elementalMastery",
            value: 15,
        },
        {
            tag: "defend2",
            value: 0.053
        }
    ],
};

let attribute = app.compose("keqing-70-0", "heijian-70-0", [art]);
```

[所有套装名称](src/artifact/artifact_type.ts)  


## 自定义基础面板
```js
const genshin = require("genshin_panel");

let attribute = Object.assign(genshin.newAttribute(), {
    // 基础攻击力
    "attack1": 123,
    // 基础生命值
    "life1": 1234
});

genshin.applyArtifacts(attribute, []);
```

## 其他
[支持的角色](src/numeric/character)
[支持的武器](src/numeric/weapon)