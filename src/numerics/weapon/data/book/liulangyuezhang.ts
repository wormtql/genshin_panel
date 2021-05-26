import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["liulangyuezhang", "流浪乐章", "thewidsith"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "criticalDamage",
        family: "cd120"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let type = that.args.type;
            if (type === "recitative") {
                let value = 0.15 * that.refine + 0.45;
                attribute.atkLift(value * that.args.rate);
            } else if (type === "aria") {
                let value = 0.12 * that.refine + 0.36;
                attribute.elementalBonus(value * that.args.rate);
            } else if (type === "interlude") {
                let value = 60 * that.refine + 180;
                attribute.elementalMastery += value * that.args.rate;
            }
        }
    }
} as WeaponDataType