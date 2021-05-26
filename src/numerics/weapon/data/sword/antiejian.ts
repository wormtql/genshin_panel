import { Weapon } from "../../../.."
import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type"

export default {
    alt: ["antiejian", "暗铁剑", "darkironsword"],
    baseAtkFamily: "atk39",
    secondary: {
        name: "elementalMastery",
        family: "em31"
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = 0.05 * that.refine + 0.15;
            attribute.atkLift(value * that.args.rate);
        }
    }
} as WeaponDataType