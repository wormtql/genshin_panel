import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["juexian", "绝弦", "thestringless"],
    baseAtkFamily: "atk42",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.06 + 0.18;
        attribute.eBonus += value;
        attribute.qBonus += value;
    },
    secondary: {
        name: "elementalMastery",
        family: "em36"
    }
} as WeaponDataType