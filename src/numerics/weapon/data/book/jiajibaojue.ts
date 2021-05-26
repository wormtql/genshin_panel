import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["jiajibaojue", "甲级宝珏", "twinnephrite"],
    baseAtkFamily: "atk40",
    secondary: {
        name: "critical",
        family: "cr34"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = that.refine * 0.02 + 0.1;
            attribute.atkLift(value * that.args.rate);
        }
    }
} as WeaponDataType