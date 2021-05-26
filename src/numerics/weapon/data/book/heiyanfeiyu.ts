import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["heiyanfeiyu", "黑岩绯玉", "blackcliffagate"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "criticalDamage",
        family: "cd120"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.03 * that.refine + 0.09;
            let level = Math.min(that.args.level, 3);
            attribute.atkLift(value * level);
        }
    }
} as WeaponDataType