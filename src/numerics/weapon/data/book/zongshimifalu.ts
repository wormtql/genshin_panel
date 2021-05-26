import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["zongshimifalu", "宗室秘法录", "royalgrimoire"],
    baseAtkFamily: "atk44",
    secondary: {
        name: "attackPercentage",
        family: "atk60",
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.02 * that.refine + 0.06;
            let level = Math.min(that.args.level, 5);
            attribute.crit(value * level);
        }
    }
} as WeaponDataType