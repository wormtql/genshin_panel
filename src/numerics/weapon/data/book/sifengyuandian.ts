import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["sifengyuandian", "四风原典", "lostprayertothesacredwinds"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "critical",
        family: "cr72",
    },
    // effect: function (attribute: Attribute) {
    //     let that = this as any as Weapon;

    //     let value = that.refine * 0.02 + 0.06;
    //     attribute.elementalBonus += value * 4;
    // }
} as WeaponDataType