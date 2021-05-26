import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["shizuozhanyan", "试作斩岩", "prototyperancour"],
    baseAtkFamily: "atk44",
    secondary: {
        name: "physicalBonus",
        family: "physical75"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.01 * that.refine + 0.03;
            let level = Math.min(that.args.level, 4);
            attribute.defLift(value * level);
            attribute.atkLift(value * level);
        }
    }
} as WeaponDataType