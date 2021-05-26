import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["shizuoxinglian", "试作星镰", "prototypestarglitter"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "recharge",
        family: "recharge100"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.02 * that.refine + 0.06;
            let level = Math.min(that.args.level, 2);
            attribute.aBonus += value * level;
            attribute.bBonus += value * level;
        }
    }
} as WeaponDataType