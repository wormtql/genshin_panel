import WeaponDataType from "../../data_type";
import Weapon from "../../weapon";

export default {
    alt: ["shenlezhizhenyi", "神乐之真意"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "criticalDamage",
        family: "cd144"
    },
    effect(attribute) {
        let that = this as any as Weapon

        if (that.args.level) {
            const level = that.args.level
            const full_rate = that.args.rate
            
            const value1 = 0.03 * that.refine + 0.09
            attribute.eBonus += value1 * level
            attribute.elementalBonus(value1 * full_rate)
        }
    }
} as WeaponDataType