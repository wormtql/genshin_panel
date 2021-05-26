export default class Attribute {
    cureEffect: number = 0;         // 治疗效果 
    curedEffect: number = 0;        // 被治疗效果

    lifeBasic: number = 0;          // 基础生命值
    lifeStatic: number = 0;         // 固定增加生命值
    lifePercentage: number = 0;     // %增加生命值

    attackBasic: number = 0;        // 基础攻击力
    attackStatic: number = 0;       // 固定攻击力
    attackPercentage: number = 0;   // %增加攻击力

    defendBasic: number = 0;        // 基础防御力
    defendStatic: number = 0;       // 固定防御力
    defendPercentage: number = 0;   // %增加防御力

    
    critical: number = 0.05;           // 普通攻击暴击率
    bCritical: number = 0.05;          // 重击暴击率
    eCritical: number = 0.05;          // 元素战技暴击率
    qCritical: number = 0.05;          // 元素爆发暴击率
    airCritical: number = 0.05;        // 下落攻击暴击率
    criticalDamage: number = 0.5;     // 暴击伤害

    thunderRes: number = 0;         // 雷元素抗性
    fireRes: number = 0;            //
    waterRes: number = 0;           //
    iceRes: number = 0;             //
    windRes: number = 0;            //
    rockRes: number = 0;            //

    elementalMastery: number = 0;   // 元素精通
    recharge: number = 1;           // 元素充能效率


    thunderBonus: number = 0;       // 雷元素伤害加成
    fireBonus: number = 0;          //
    waterBonus: number = 0;         //
    iceBonus: number = 0;           //
    windBonus: number = 0;          //
    rockBonus: number = 0;          //
    grassBonus: number = 0;         //
    physicalBonus: number = 0;      // 物理伤害加成
    // elementalBonus: number = 0;     // 元素伤害加成

    aBonus: number = 0;             // 普通攻击伤害加成
    bBonus: number = 0;             // 重击伤害加成
    eBonus: number = 0;             // 元素战技伤害加成
    qBonus: number = 0;             // 元素爆发伤害加成
    airBonus: number = 0;           // 下落攻击伤害加成
    bonus: number = 0;              // 伤害加成

    thunderTime: number = 0;        // 雷元素附着持续时间
    fireTime: number = 0;           //
    waterTime: number = 0;          //
    iceTime: number = 0;            //
    windTime: number = 0;           //
    rockTime: number = 0;           //
    grassTime: number = 0;          //

    shield: number = 0;             // 护盾强效

    aSpeed: number = 1;             // 攻击速度
    bSpeed: number = 1;

    overloadEnhance: number = 0;    // 超载强度
    burningEnhance: number = 0;     // 燃烧强度
    electroEnhance: number = 0;     // 感电强度
    superconductEnhance: number = 0;// 超导强度
    swirlThunderEnhance: number = 0;// 扩散（雷）强度
    swirlFireEnhance: number = 0;
    swirlWaterEnhance: number = 0;
    swirlIceEnhance: number = 0;


    vaporizeEnhance: number = 0;    // 蒸发强度
    meltEnhance: number = 0;        // 融化强度

    moveSpeed: number = 1;

    attack(): number {
        return this.attackBasic + this.attackPercentage + this.attackStatic;
    }

    atkLift(value: number) {
        this.attackPercentage += this.attackBasic * value;
    }

    life(): number {
        return this.lifeBasic + this.lifePercentage + this.lifeStatic;
    }

    lifeLift(value: number) {
        this.lifePercentage += this.lifeBasic * value;
    }

    defend(): number {
        return this.defendBasic + this.defendPercentage + this.defendStatic;
    }

    defLift(value: number) {
        this.defendPercentage += this.defendBasic * value;
    }

    crit(value: number) {
        this.critical += value;
        this.bCritical += value;
        this.eCritical += value;
        this.qCritical += value;
        this.airCritical += value;
    }

    elementalBonus(value: number) {
        this.fireBonus += value;
        this.thunderBonus += value;
        this.waterBonus += value;
        this.iceBonus += value;
        this.windBonus += value;
        this.rockBonus += value;
    }
}