import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["heijian", "黑剑", "theblacksword"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        let percentage = that.refine * 0.05 + 0.15;
        
        attribute.aBonus += percentage;
        attribute.bBonus += percentage;
    },
    baseAtkFamily: "atk42",
    secondary: {
        name: "critical",
        family: "cr60",
    }
} as WeaponDataType