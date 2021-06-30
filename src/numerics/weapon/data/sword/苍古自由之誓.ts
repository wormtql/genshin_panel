import { Weapon } from "../../../.."
import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type"

export default {
    alt: ["cangguziyouzhishi", "苍古自由之誓", "freedomsworn"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "elementalMastery",
        family: "em43"
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;

        const value = that.refine * 0.025 + 0.075;
        attribute.bonus += value;

        if (that.args.rate) {
            const value1 = 0.04 * that.refine + 0.12;
            const value2 = 0.05 * that.refine + 0.15;

            attribute.aBonus += value1 * that.args.rate;
            attribute.bBonus += value1 * that.args.rate;
            attribute.airBonus += value1 * that.args.rate;

            attribute.atkLift(value2 * that.args.rate);
        }
    }
} as WeaponDataType