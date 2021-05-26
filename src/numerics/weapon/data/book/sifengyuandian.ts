import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["sifengyuandian", "四风原典", "lostprayertothesacredwinds"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "critical",
        family: "cr72",
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = that.refine * 0.02 + 0.06;
            let level = Math.min(that.args.level, 4);
            attribute.elementalBonus(value * level);
        }
    }
} as WeaponDataType