import { Attribute } from "./attribute";

export { Attribute } from "./attribute";

export function newAttribute(): Attribute {
    return {
        cureEffect: 0,         // 治疗效果 
        curedEffect: 0,        // 被治疗效果
        life: 0,               // 当前生命值
        life1: 0,              // 基础生命值
        life2: 0,              // 增加生命值
        attack1: 0,            // 基础攻击力
        attack2: 0,            // 增加攻击力
        defend1: 0,            // 基础防御力
        defend2: 0,            // 增加防御力


        critical: 0,           // 暴击率
        bCritical: 0,          // 重击暴击率
        criticalDamage: 0,     // 暴击伤害

        thunderRes: 0,         // 雷元素抗性
        fireRes: 0,            //
        waterRes: 0,           //
        iceRes: 0,             //
        windRes: 0,            //
        rockRes: 0,            //

        elementalMastery: 0,   // 元素精通
        recharge: 1,           // 元素充能效率


        thunderBonus: 0,       // 雷元素伤害加成
        fireBonus: 0,          //
        waterBonus: 0,         //
        iceBonus: 0,           //
        windBonus: 0,          //
        rockBonus: 0,          //

        thunderTime: 0,        // 雷元素附着持续时间
        fireTime: 0,           //
        waterTime: 0,          //
        iceTime: 0,            //
        windTime: 0,           //
        rockTime: 0,           //

        physicalBonus: 0,      // 物理伤害加成

        aBonus: 0,             // 普通攻击伤害加成
        bBonus: 0,             // 重击伤害加成

        bonus: 0,              // 伤害加成

        eBonus: 0,             // 元素战技伤害加成
        qBonus: 0,             // 元素爆发伤害加成

        shield: 0,             // 护盾强效

        tag: [],
    }
}