import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["feiyufaqiu", "翡玉法球", "emeraldorb"],
    baseAtkFamily: "atk40",
    secondary: {
        name: "elementalMastery",
        family: "em20",
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = 0.05 * that.refine + 0.15;
            attribute.atkLift(value * that.args.rate);
        }
    }
} as WeaponDataType