import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["feileizhixianzhen", "飞雷之弦振", "thunderingpulse"],
    baseAtkFamily: "atk46",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value;
        value = 0.15 + 0.05 * that.refine;
        attribute.atkLift(value);

        if (that.args.level) {
            let level = that.args.level;
            if (level === 1) {
                value = 0.09 + 0.03 * that.refine;
            } else if (level === 2) {
                value = 0.18 + 0.06 * that.refine;
            } else if (level === 3) {
                value = 0.3 + 0.1 * that.refine;
            } else {
                value = 0;
            }
            attribute.aBonus += value;
        }
    },
    secondary: {
        name: "criticalDamage",
        family: "cd144",
    }
} as WeaponDataType