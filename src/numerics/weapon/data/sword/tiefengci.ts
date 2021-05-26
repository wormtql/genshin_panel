import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tiefengci", "铁蜂刺", "ironsting"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "elementalMastery",
        family: "em36"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.015 * that.refine + 0.045;
            let level = Math.min(that.args.level, 2);
            attribute.bonus += value * level;
        }
    }
} as WeaponDataType