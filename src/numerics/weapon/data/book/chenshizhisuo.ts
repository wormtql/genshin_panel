import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["chenshizhisuo", "尘世之锁", "memoryofdust"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "attackPercentage",
        family: "atk108"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = 0.05 * that.refine + 0.15;
        attribute.shield += value;
        if (that.args.level) {
            value = 0.01 * that.refine + 0.03;
            let level = Math.min(that.args.level, 5);
            if (that.args.rate) {
                level *= 1 + that.args.rate;
            }
            attribute.atkLift(level * value);
        }
    }
} as WeaponDataType