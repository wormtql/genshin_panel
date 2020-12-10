# 接口与类型


## Attribute

面板接口

```typescript
export interface Attribute {
    cureEffect: number;         // 治疗效果 
    curedEffect: number;        // 被治疗效果

    life1: number;              // 基础生命值
    life2: number;              // 固定增加生命值
    life3: number;              // %增加生命值

    attack1: number;            // 基础攻击力
    attack2: number;            // 固定攻击力
    attack3: number;            // %增加攻击力

    defend1: number;            // 基础防御力
    defend2: number;            // 固定防御力
    defend3: number;            // %增加防御力

    critical: number;           // 暴击率
    bCritical: number;          // 重击暴击率
    eCritical: number;          // 元素战技暴击率
    qCritical: number;          // 元素爆发暴击率
    criticalDamage: number;     // 暴击伤害

    thunderRes: number;         // 雷元素抗性
    fireRes: number;            //
    waterRes: number;           //
    iceRes: number;             //
    windRes: number;            //
    rockRes: number;            //

    elementalMastery: number;   // 元素精通
    recharge: number;           // 元素充能效率

    thunderBonus: number;       // 雷元素伤害加成
    fireBonus: number;          //
    waterBonus: number;         //
    iceBonus: number;           //
    windBonus: number;          //
    rockBonus: number;          //

    thunderTime: number;        // 雷元素附着持续时间
    fireTime: number;           //
    waterTime: number;          //
    iceTime: number;            //
    windTime: number;           //
    rockTime: number;           //

    physicalBonus: number;      // 物理伤害加成

    aBonus: number;             // 普通攻击伤害加成
    bBonus: number;             // 重击伤害加成

    bonus: number;              // 伤害加成

    eBonus: number;             // 元素战技伤害加成
    qBonus: number;             // 元素爆发伤害加成

    shield: number;             // 护盾强效
}
```


## PrimaryTagName

**主属性**的所有词条名称

```typescript
export type PrimaryTagName
    = "attack"
    | "defend"
    | "life"
;
```


## SecondaryTagName

**副属性**的所有词条名称

```typescript
export type SecondaryTagName
    = "cureEffect"         // 治疗效果 
    | "life1"              // 固定生命值
    | "life2"              // %生命值
    | "attack1"            // 固定攻击力
    | "attack2"            // %攻击力
    | "defend1"            // 固定防御力
    | "defend2"            // %防御力
    | "critical"           // 暴击率
    | "criticalDamage"     // 暴击伤害
    | "elementalMastery"   // 元素精通
    | "recharge"           // 元素充能效率
    | "thunderBonus"       // 雷元素伤害加成
    | "fireBonus"          //
    | "waterBonus"         //
    | "iceBonus"           //
    | "windBonus"          //
    | "rockBonus"          //
    | "physicalBonus"      // 物理伤害加成
;
```


## CharacterInterface

角色属性接口

```typescript
export interface CharacterInterface {
    primary: {
        [key in PrimaryTagName]: number
    },
    secondary: {
        [key in SecondaryTagName]: number
    }
}
```


## WeaponInterface

武器属性接口

```typescript
export interface WeaponInterface {
    primary: {
        [key in PrimaryTagName]: number
    },
    secondary: {
        [key in SecondaryTagName]: number
    }
}
```


## IArtifact

圣遗物接口

```typescript
export interface IArtifact {
    position: ArtifactType,                 // 位置
    setName: ArtifactSet,                   // 套装
    primary: {                              // 主词条
        [key in SecondaryTagName]: number
    },
    secondary: {                            // 副词条
        [key in SecondaryTagName]: number
    },
}
```


## ArtifactType

圣遗物位置

```typescript
export type ArtifactType =
    "flower" | "feather" | "sand" | "cup" | "head";
```


## ArtifactSet

圣遗物套装

```typescript
export type ArtifactSet
    = "archaicPetra"               // 悠古的磐岩
    | "retracingBolide"            // 逆飞的流星
    | "noblesseOblige"             // 昔日宗室之仪
    | "gladiatorFinale"            // 角斗士的终幕礼
    | "maidenBeloved"              // 被怜爱的少女
    | "viridescentVenerer"         // 翠绿之影
    | "lavaWalker"                 // 渡过烈火的贤人
    | "crimsonWitch"               // 炽烈的炎之魔女
    | "thunderSmoother"            // 平息雷鸣的尊者
    | "thunderingFury"             // 如雷的盛怒
    | "bloodstainedChivalry"       // 染血的骑士道
    | "wandererTroupe"             // 流浪大地的乐团
    | "scholar"                    // 学士
    | "gambler"                    // 赌徒
    | "tinyMiracle"                // 奇迹
    | "martialArtist"              // 武人
    | "braveHeart"                 // 勇士之心
    | "resolutionOfSojourner"      // 行者之心
    | "defenderWill"               // 守护之心
    | "berserker"                  // 战狂
    | "instructor"                 // 教官
    | "exile"                      // 流放者
    | "adventurer"                 // 冒险家
    | "luckyDog"                   // 幸运儿
    | "travelingDoctor"            // 游医
    | "prayersForWisdom"           // 祭雷之人
    | "prayersToSpringtime"        // 祭冰之人
    | "prayersForIllumination"     // 祭火之人
    | "prayersForDestiny"          // 祭水之人
;
```


## Param

圣遗物参数

```typescript
export interface Param {
    countBerserker?: boolean;
    countInstructor?: boolean;
    countBraveHeart?: boolean;
    countMartialArtist?: boolean;
    countWandererTroupe?: boolean;
    countThunderSmoother?: boolean;
    countGladiatorFinale?: boolean;
    countRetracingBolide?: boolean;
    countThunderingFury?: boolean;
    countLavaWalker?: boolean;
    countBloodstainedChinalry?: boolean;
    countCrimsonWitch1?: boolean;
    countViridescentVenerer?: boolean;
}
```