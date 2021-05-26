import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["yucai", "雨裁", "rainslasher"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "elementalMastery",
        family: "em36"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = 0.04 * that.refine + 0.16;
            attribute.bonus += value * that.args.rate;
        }
    }
} as WeaponDataType