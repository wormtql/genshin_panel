import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["baiyingqiang", "白缨枪", "whitetassel"],
    baseAtkFamily: "atk39",
    secondary: {
        name: "critical",
        family: "cr51",
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.06 + 0.18;
        attribute.aBonus += value;
    }
} as WeaponDataType