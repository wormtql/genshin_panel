import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["zongshidajian", "宗室大剑", "royalgreatsword"],
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