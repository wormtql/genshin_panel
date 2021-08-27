import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["yuhuo", "「渔获」", "thecatch"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "recharge",
        family: "recharge100",
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value;

        value = 0.04 * that.refine + 0.12;
        attribute.qBonus += value;
        value = 0.015 * that.refine + 0.045;
        attribute.qCritical += value;
    }
} as WeaponDataType