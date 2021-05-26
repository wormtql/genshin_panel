import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["chigujian", "螭骨剑", "serpentspine"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "critical",
        family: "cr60"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.01 * that.refine + 0.05;
            let level = Math.min(that.args.level, 5);
            attribute.bonus += value * level;
        }
    }
} as WeaponDataType