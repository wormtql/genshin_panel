import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["feitiandayujian", "飞天大御剑", "skyridergreatsword"],
    baseAtkFamily: "atk39",
    secondary: {
        name: "physicalBonus",
        family: "physical96"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.01 * that.refine + 0.05;
            let level = Math.min(that.args.level, 4);
            attribute.atkLift(value * level);
        }
    }
} as WeaponDataType