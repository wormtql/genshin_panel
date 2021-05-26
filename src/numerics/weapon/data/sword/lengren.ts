import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["lengren", "冷刃", "coolsteel"],
    baseAtkFamily: "atk39",
    secondary: {
        name: "attackPercentage",
        family: "atk77"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = 0.03 * that.refine + 0.09;
            attribute.bonus += that.args.rate * value;
        }
    }
} as WeaponDataType