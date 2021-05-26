import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";
import Weapon from "../../weapon";

export default {
    alt: ["zhuofengzhiren", "斫峰之刃", "summitshaper"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "attackPercentage",
        family: "atk108"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let percentage = that.refine * 0.05 + 0.15;
        attribute.shield += percentage;

        if (that.args.level) {
            let value = 0.01 * that.refine + 0.03;
            let level = Math.min(that.args.level, 5);
            if (that.args.rate) {
                level *= 1 + that.args.rate;
            }
            attribute.atkLift(value * level);
        }
    }
} as WeaponDataType