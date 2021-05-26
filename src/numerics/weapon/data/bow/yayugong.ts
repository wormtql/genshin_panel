import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["yayugong", "鸦羽弓", "ravenbow"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let percentage = that.refine * 0.03 + 0.09;
            attribute.bonus += percentage * that.args.rate;
        }
    },
    baseAtkFamily: "atk40",
    secondary: {
        name: "elementalMastery",
        family: "em20"
    }
} as WeaponDataType