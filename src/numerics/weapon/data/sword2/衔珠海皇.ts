import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";
import Weapon from "../../weapon";

export default {
    alt: ["xianzhuhaihuang", "衔珠海皇", "luxurioussealord"],
    baseAtkFamily: "atk41",
    secondary: {
        name: "attackPercentage",
        family: "atk120",
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;
        let value = that.refine * 0.03 + 0.09;
        attribute.qBonus += value;
    }
} as WeaponDataType