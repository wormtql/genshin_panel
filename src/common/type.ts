export type PrimaryTagName
    = "attack"
    | "defend"
    | "life"
;

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

export interface WeaponInterface {
    primary: {
        [key in PrimaryTagName]: number
    },
    secondary: {
        [key in SecondaryTagName]: number
    }
}

export interface CharacterInterface {
    primary: {
        [key in PrimaryTagName]: number
    },
    secondary: {
        [key in SecondaryTagName]: number
    }
}