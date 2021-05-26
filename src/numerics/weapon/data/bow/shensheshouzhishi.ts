import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["shensheshouzhishi", "神射手之誓", "sharpshootersoath"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        if (that.args.critical) {
            let percentage = that.refine * 0.06 + 0.18;
            attribute.bonus += percentage;
        }
    },
    baseAtkFamily: "atk39",
    secondary: {
        name: "criticalDamage",
        family: "cd102"
    }
} as WeaponDataType