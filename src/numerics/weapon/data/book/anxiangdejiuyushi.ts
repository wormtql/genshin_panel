import { Weapon } from "../../../.."
import Attribute from "../../../../attribute/attribute"
import WeaponDataType from "../../data_type"

export default {
    alt: ["anxiangdejiuyushi", "暗巷的酒与诗", "wineandsong"],
    baseAtkFamily: "atk44",
    secondary: {
        name: "recharge",
        family: "recharge67"
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;

        if (that.args.rate) {
            let value = that.refine * 0.05 + 0.15;
            attribute.atkLift(value * that.args.rate);
        }
    }
} as WeaponDataType