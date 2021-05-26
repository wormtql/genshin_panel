import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["xialimiechen", "匣里灭辰", "dragonsbane"],
    baseAtkFamily: "atk41",
    secondary: {
        name: "elementalMastery",
        family: "em48"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        if (that.args.rate) {
            let value = that.refine * 0.04 + 0.16;
            attribute.bonus += value * that.args.rate;
        }
        
    }
} as WeaponDataType