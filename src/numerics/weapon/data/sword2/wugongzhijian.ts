import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";
import Weapon from "../../weapon";

export default {
    alt: ["wugongzhijian", "无工之剑", "theunforged"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "attackPercentage",
        family: "atk108"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        attribute.shield += that.refine * 0.05 + 0.15;

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