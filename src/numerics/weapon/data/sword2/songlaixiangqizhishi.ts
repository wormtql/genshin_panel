import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["songlaixiangqizhishi", "松籁响起之时", "songofbrokenpines"],
    baseAtkFamily: "atk49",
    secondary: {
        name: "physicalBonus",
        family: "physical45",
    },
    effect(attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.04 + 0.12;
        attribute.attackPercentage += attribute.attackBasic * value;

        if (that.args.rate) {
            value = 0.03 * that.refine + 0.09;
            attribute.aSpeed += value * that.args.rate;
            value = that.refine * 0.05 + 0.15;
            attribute.atkLift(value * that.args.rate);
        }
    }
} as WeaponDataType