import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["gongcang", "弓藏", "rust"],
    baseAtkFamily: "atk42",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = 0.1 * that.refine + 0.3;
        attribute.aBonus += value;
        attribute.bBonus -= 0.1;
    },
    secondary: {
        name: "attackPercentage",
        family: "atk90"
    }
} as WeaponDataType