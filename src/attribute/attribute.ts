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

    tag?: string[];

    // constructor() {
    //     this.tag = [];
    // }
}