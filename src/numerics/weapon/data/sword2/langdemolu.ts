import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["langdemolu", "狼的末路", "wolfsgravestone"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let percentage = that.refine * 0.05 + 0.15;
        attribute.attackPercentage += attribute.attackBasic * percentage;

        if (that.args.rate) {
            let value = 0.1 * that.refine + 0.3;
            attribute.atkLift(value * that.args.rate);
        }
    },
    baseAtkFamily: "atk46",
    secondary: {
        name: "attackPercentage",
        family: "atk108"
    }
} as WeaponDataType