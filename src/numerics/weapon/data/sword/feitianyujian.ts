import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["飞天御剑", "feitianyujian", "skyridersword"],
    baseAtkFamily: "atk38",
    secondary: {
        name: "recharge",
        family: "recharge113",
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = 0.03 * that.refine + 0.09;
            attribute.atkLift(value * that.args.rate);
        }
    }
} as WeaponDataType