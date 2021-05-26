import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["xialilongyin", "匣里龙吟", "lionsroar"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "attackPercentage",
        family: "atk90"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = 0.04 * that.refine + 0.16;
            attribute.bonus += value * that.args.rate;
        }
    }
} as WeaponDataType