import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["xialilongyin", "匣里龙吟", "lionsroar"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        let percentage = that.refine * 0.04 + 0.15;
        
        attribute.bonus += percentage;
    },
    baseAtkFamily: "atk42",
    secondary: {
        name: "attackPercentage",
        family: "atk90"
    }
} as WeaponDataType