import Attribute from "../attribute/attribute"

export type PrimaryTagName
    = "attack"
    | "defend"
    | "life"
;

export type SecondaryTagName
    = "cureEffect"         // 治疗效果
    | "lifeStatic"         // 固定生命值
    | "lifePercentage"     // %生命值
    | "attackStatic"       // 固定攻击力
    | "attackPercentage"   // %攻击力
    | "defendStatic"       // 固定防御力
    | "defendPercentage"   // %防御力
    | "critical"           // 全暴击率
    | "eCritical"          // E暴击率
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
    | "bonus"              // 伤害加成
    | "aBonus"             // 平A伤害加成
    | "bBonus"             // 重击伤害加成
    | "eBonus"             // E伤害加成
    | "qBonus"             // Q伤害加成
;