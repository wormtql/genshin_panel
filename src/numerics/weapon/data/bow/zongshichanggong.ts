import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["zongshichanggong", "宗室长弓", "royalbow"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "attackPercentage",
        family: "atk90",
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.02 * that.refine + 0.06;
            let level = Math.min(that.args.level, 5);
            attribute.crit(value * level);
        }
    }
} as WeaponDataType