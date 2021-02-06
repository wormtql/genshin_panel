import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["chigujian", "螭骨剑", "serpentspine"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.01 + 0.05;
        attribute.bonus += value;
    },
    baseAtkFamily: "atk42",
    secondary: {
        name: "critical",
        family: "cr60"
    }
} as WeaponDataType