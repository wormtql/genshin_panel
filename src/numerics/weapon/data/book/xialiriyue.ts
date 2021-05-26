import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["xialiriyue", "匣里日月", "solarpearl"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "critical",
        family: "cr60",
    },
    effect(attribute) {
        let that = this as any as Weapon;
        let value = that.refine * 0.05 + 0.15;
        if (that.args.rate1) {
            attribute.eBonus += value * that.args.rate1;
            attribute.qBonus += value * that.args.rate1;
        }
        if (that.args.rate2) {
            attribute.aBonus += value * that.args.rate2;
        }
    }
} as WeaponDataType