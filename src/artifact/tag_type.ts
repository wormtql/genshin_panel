// export enum TagType {
//     CureEffect,         // 治疗效果 
//     // CuredEffect,        // 被治疗效果
//     Life1,              // 固定生命值
//     Life2,              // %生命值
//     Attack1,            // 固定攻击力
//     Attack2,            // %攻击力
//     Defend1,            // 固定防御力
//     Defend2,            // %防御力
//     Critical,           // 暴击率
//     CriticalDamage,     // 暴击伤害

//     // ThunderRes,         // 雷元素抗性
//     // FireRes,            //
//     // WaterRes,           //
//     // IceRes,             //
//     // WindRes,            //
//     // RockRes,            //

//     ElementalMastery,   // 元素精通
//     Recharge,           // 元素充能效率

//     // Damage,             // 

//     ThunderBonus,       // 雷元素伤害加成
//     FireBonus,          //
//     WaterBonus,         //
//     IceBonus,           //
//     WindBonus,          //
//     RockBonus,          //

//     PhysicalBonus,      // 物理伤害加成

//     // ABonus,             // 普通攻击伤害加成
//     // BBonus,             // 重击伤害加成

//     // EBonus,             // 元素战技伤害加成
//     // QBonus,             // 元素爆发伤害加成

// }

export type TagName
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

export interface TagType {
    tag: TagName,
    value: number
}