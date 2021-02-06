import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tiankongzhiao", "天空之傲", "skywardpride"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.02 + 0.06;
        attribute.bonus += value;
    },
    baseAtkFamily: "atk48",
    secondary: {
        name: "recharge",
        family: "recharge80",
    }
} as WeaponDataType