# 《原神》面板计算器
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
import { compose } from "genshin_panel";

// 刻晴70级未突破，黑剑70级未突破，无圣遗物
let attribute = compose("keqing-70-0", "heijian-70-0", []);

// 刻晴70级未突破，黎明神剑70级突破，无圣遗物
let attribute2 = compose("keqing-70-0", "limingshenjian-70-1". []);
```

## 添加圣遗物：
```js
import { compose, Artifact } from "genshin_panel";

// 如雷的盛怒
let art = new Artifact("flower", "thunderingFury");
art.setPrimaryTag("life1", 2291);
art.addSecondaryTag("critical", 0.031);
art.addSecondaryTag("defend2", 0.047);
art.addSecondaryTag("life2", 0.037);
art.addSecondaryTag("elementalMastery", 19);

// 战狂
let art2 = new Artifact("feather", "berserker");
art2.setPrimaryTag("attack1", 232);
art2.addSecondaryTag("defend1", 13);
art2.addSecondaryTag("attack2", 0.042);
art2.addSecondaryTag("criticalDamage", 0.099);
art2.addSecondaryTag("life1", 406);

// 如雷的盛怒
let art3 = new Artifact("sand", "thunderingFury");
art3.setPrimaryTag("attack2", 0.348);
art3.addSecondaryTag("defend1", 15);
art3.addSecondaryTag("recharge", 0.145);
art3.addSecondaryTag("life2", 0.042);
art3.addSecondaryTag("critical", 0.025);

// 行者之心
let art4 = new Artifact("cup", "resolutionOfSojourner");
art4.setPrimaryTag("thunderBonus", 0.348);
art4.addSecondaryTag("defend1", 46);
art4.addSecondaryTag("attack1", 11);
art4.addSecondaryTag("recharge", 0.052);
art4.addSecondaryTag("elementalMastery", 32);

// 战狂
let art5 = new Artifact("head", "berserker");
art5.setPrimaryTag("critical", 0.232);
art5.addSecondaryTag("attack1", 30);
art5.addSecondaryTag("defend1", 31);
art5.addSecondaryTag("criticalDamage", 0.056);
art5.addSecondaryTag("life1", 215);

// 包含如雷2件套、战狂2件套的加成效果
let attribute = app.compose("keqing-70-0", "heijian-70-0", [art, art2, art3, art4, art5]);
```

## 自定义基础面板
```js
import { newAttribute, applyArtifacts } from "genshin_panel";

let attribute = Object.assign(newAttribute(), {
    // 基础攻击力
    "attack1": 123,
    // 基础生命值
    "life1": 1234
});

applyArtifacts(attribute, []);
```

## 支持的人物
- keqing-70-0

## 支持的武器
- 黎明神剑20-80级
- 黑剑20-80级

## 