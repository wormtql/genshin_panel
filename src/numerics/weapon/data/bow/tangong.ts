import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tangong", "弹弓", "slingshot"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.06 + 0.3;
        attribute.bonus += value;
    },
    baseAtkFamily: "atk38",
    secondary: {
        name: "critical",
        family: "cr68"
    }
} as WeaponDataType