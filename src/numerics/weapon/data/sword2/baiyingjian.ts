import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["baiyingjian", "白影剑", "whiteblind"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "defendPercentage",
        family: "def113"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.015 * that.refine + 0.045;
            let level = Math.min(that.args.level, 4);
            attribute.atkLift(value * level);
            attribute.defLift(value * level);
        }
    }
} as WeaponDataType