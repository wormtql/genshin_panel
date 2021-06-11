import { Weapon } from "../../../.."
import Attribute from "../../../../attribute/attribute"
import WeaponDataType from "../../data_type"

export default {
    alt: ["dudukegushiji", "嘟嘟可故事集", "dodocotales"],
    baseAtkFamily: "atk41",
    secondary: {
        name: "attackPercentage",
        family: "atk120"
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;

        if (that.args.rate1) {
            let value = that.refine * 0.04 + 0.12;
            attribute.bBonus += value * that.args.rate1;
        }
        if (that.args.rate2) {
            let value = that.refine * 0.02 + 0.06;
            attribute.atkLift(value * that.args.rate2);
        }
    }
} as WeaponDataType