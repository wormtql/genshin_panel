import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["zhongmojietanzhishi", "终末嗟叹之诗", "elegyfortheend"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "recharge",
        family: "recharge120",
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 15 + 45;
        attribute.elementalMastery += value;
        if (that.args.rate) {
            let value1 = 25 * that.refine + 75;
            let value2 = 0.05 * that.refine + 0.15;
            attribute.elementalMastery += value1 * that.args.rate;
            attribute.atkLift(value2 * that.args.rate);
        }
    },
} as WeaponDataType