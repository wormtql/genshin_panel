import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["dongjibaixing", "冬极白星", "polarstar"],
    baseAtkFamily: "atk46",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = 0.03 * that.refine + 0.09;
        attribute.eBonus += value;
        attribute.qBonus += value;

        if (that.args.level) {
            let level = that.args.level;
            level = Math.round(level);
            level = Math.max(level, 0);
            level = Math.min(level, 4);
            
            let value = 0;
            if (level === 1) {
                value = that.refine * 0.025 + 0.075;
            } else if (level === 2) {
                value = that.refine * 0.05 + 0.15;
            } else if (level === 3) {
                value = that.refine * 0.075 + 0.225;
            } else {
                value = that.refine * 0.12 + 0.36;
            }
            
            attribute.atkLift(value);
        }
    },
    secondary: {
        name: "critical",
        family: "cr72",
    }
} as WeaponDataType