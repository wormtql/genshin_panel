import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["heiyanzhangong", "黑岩战弓", "blackcliffwarbow"],
    baseAtkFamily: "atk44",
    secondary: {
        name: "criticalDamage",
        family: "cd80"
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