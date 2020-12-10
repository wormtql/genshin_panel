# genshin_panel


原神面板计算器


## 快速开始
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

// 刻晴70级未突破，黑剑70级未突破
let attribute = genshin.compose("keqing-70-0", "heijian-70-0", [art]);
```


## 自定义角色、武器面板
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