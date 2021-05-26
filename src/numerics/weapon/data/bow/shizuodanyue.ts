import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["shizuodanyue", "试作澹月", "prototypecrescent"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "attackPercentage",
        family: "atk90",
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = 0.09 * that.refine + 0.27;
            attribute.atkLift(value * that.args.rate);
        }
    }
} as WeaponDataType