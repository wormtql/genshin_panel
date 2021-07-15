import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["xiduoyuanshiwenzi", "喜多院十文字", "kitaincrossspear"],
    baseAtkFamily: "atk44",
    secondary: {
        name: "elementalMastery",
        family: "em24",
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.015 + 0.045;
        attribute.eBonus += value;
    }
} as WeaponDataType