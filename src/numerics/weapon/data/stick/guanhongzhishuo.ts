import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["guanhongzhishuo", "贯虹之槊", "vortexvanquisher"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "attackPercentage",
        family: "atk108"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.05 + 0.15;
        attribute.shield += value;

        if (that.args.level) {
            value = that.refine * 0.01 + 0.03;
            let level = Math.min(that.args.level, 5);
            if (that.args.rate) {
                level *= 1 + that.args.rate;
            }
            attribute.atkLift(value * level);
        }
    }
} as WeaponDataType