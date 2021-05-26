import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["zhongjian", "钟剑", "thebell"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "lifePercentage",
        family: "hp90"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            let value = 0.03 * that.refine + 0.09;
            attribute.bonus += value * that.args.rate;
        }
    }
} as WeaponDataType