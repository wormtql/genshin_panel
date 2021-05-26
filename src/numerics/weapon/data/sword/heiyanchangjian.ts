import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["heiyanchangjian", "黑岩长剑", "blackclifflongsword"],
    baseAtkFamily: "atk44",
    secondary: {
        name: "criticalDamage",
        family: "cr80"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = that.refine * 0.03 + 0.09;
            attribute.attackPercentage += attribute.attackBasic * value * that.args.level;
        }
    }
} as WeaponDataType