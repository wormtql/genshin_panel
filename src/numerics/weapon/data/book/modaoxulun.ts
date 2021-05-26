import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["modaoxulun", "魔导绪论", "magicguide"],
    baseAtkFamily: "atk38",
    secondary: {
        name: "elementalMastery",
        family: "em41",
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = that.refine * 0.03 + 0.09;
            attribute.bonus += value * that.args.rate;
        }
    }
} as WeaponDataType