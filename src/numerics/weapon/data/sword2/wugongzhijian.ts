import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";
import Weapon from "../../weapon";

export default {
    alt: ["wugongzhijian", "无工之剑", "theunforged"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "attackPercentage",
        family: "atk108"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        attribute.shield += that.refine * 0.05 + 0.15;
    }
} as WeaponDataType