import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["muyulongxiedejian", "沐浴龙血的剑", "bloodtaintedgreatsword"],
    baseAtkFamily: "atk38",
    secondary: {
        name: "elementalMastery",
        family: "em41"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = 0.03 * that.refine + 0.09;
            attribute.bonus += value * that.args.rate;
        }
    }
} as WeaponDataType