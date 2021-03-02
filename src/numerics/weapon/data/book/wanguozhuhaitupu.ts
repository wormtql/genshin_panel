import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["wanguozhuhaitupu", "万国诸海图谱", "mappamare"],
    baseAtkFamily: "atk44",
    secondary: {
        name: "elementalMastery",
        family: "em24"
    },
    // effect: function (attribute: Attribute) {
    //     let that = this as any as Weapon;

    //     let value = that.refine * 0.02 + 0.06;
    //     attribute.elementalBonus += value;
    // }
} as WeaponDataType