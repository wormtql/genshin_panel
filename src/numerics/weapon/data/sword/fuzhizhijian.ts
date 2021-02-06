import Weapon from "../../weapon";
import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";

export default {
    alt: ["fuzhizhijian", "腐殖之剑", "festeringdesire"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let percentage = that.refine * 0.015 + 0.045;
        attribute.eCritical += percentage;

        percentage = that.refine * 0.04 + 0.12;
        attribute.eBonus += percentage;
    },
    baseAtkFamily: "atk42",
    secondary: {
        name: "recharge",
        family: "recharge100"
    }
} as WeaponDataType