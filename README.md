# 《原神》面板计算器
<!-- [![Build Status](https://travis-ci.org/wormtql/genshin_panel.svg?branch=main)](https://travis-ci.org/wormtql/genshin_panel) -->
![npm](https://img.shields.io/npm/v/genshin_panel)  

**This repository is no longer supported**

模拟角色、装备、圣遗物的搭配，得出最终面板。

注：最终面板与实际面板有出入，这是因为游戏中的圣遗物只保留到小数点后一位，实际上这之后的小数位数并不是零。  
最终结果仅有非常小的差别，可以忽略不计

## Install
```bash
npm install genshin_panel
```

## Documentation
[https://wormtql.gitbook.io/genshin-panel-doc/](https://wormtql.gitbook.io/genshin-panel-doc/)


## Build Character and Weapon
```js
const genshin = require("genshin_panel");

// 刻晴，80级，已突破，0命之座
let keqing = new genshin.Character("keqing", 80, true, 0);
// use Chinese or English
let keqing = new genshin.Character("刻晴", 80, true, 0);

// 黑剑，90级，未突破，精炼2（初始为精炼1）
let heijian = new genshin.Weapon("heijian", 90, false, 2);
// same
let heijian = new genshin.Weapon("theblacksword", 90, false, 2);
```


## Build artifacts
use ArtifactBuilder to build artifacts
```js
const genshin = require("genshin_panel");

let art1 = new genshin.ArtifactBuilder()
    .setName("thunderingFury")      // 如雷的盛怒
    .position("flower")             // 生之花
    .mainTag("lifeStatic", 4780)
    .tag("critical", 0.086)
    .tag("elementalMastery", 21)
    .tag("attackPercentage", 0.099)
    .tag("defendStatic", 39)
    .build()
;
```


## Build Panel
```js
const genshin = require("genshin_panel");

let attribute = new genshin.AttributeBuilder()
    .character(keqing)
    .weapon(weapon)
    .artifact(art1)
    .artifact(art2)
    .artifact(art3)
    .artifact(art4)
    .artifact(art5)
    .build()
;
```
