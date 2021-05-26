import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["amosizhigong", "阿莫斯之弓", "amosbow"],
    baseAtkFamily: "atk46",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let percentage = that.refine * 0.03 + 0.09;
        attribute.aBonus += percentage;
        attribute.bBonus += percentage;
        if (that.args.level) {
            let value = that.refine * 0.02 + 0.06;
            let level = Math.min(that.args.level, 5);
            attribute.aBonus += value * level;
            attribute.bBonus += value * level;
        }
    },
    secondary: {
        name: "attackPercentage",
        family: "atk108"
    }
} as WeaponDataType