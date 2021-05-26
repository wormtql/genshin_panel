import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tieyingkuojian", "铁影阔剑", "ferrousshadow"],
    baseAtkFamily: "atk39",
    secondary: {
        name: "lifePercentage",
        family: "hp77",
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.passive) {
            let value = 0.05 * that.refine + 0.25;
            attribute.bBonus += value;
        }
    }
} as WeaponDataType