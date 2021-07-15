import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["pomozhigong", "破魔之弓", "hamayumi"],
    baseAtkFamily: "atk41",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let rate = that.args.rate ? 1 + that.args.rate : 1;

        let value = that.refine * 0.04 + 0.12;
        attribute.aBonus += value * rate;
        value = that.refine * 0.03 + 0.09;
        attribute.bBonus += value * rate;
    },
    secondary: {
        name: "attackPercentage",
        family: "atk120"
    }
} as WeaponDataType