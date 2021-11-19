import { Weapon } from "../../../..";
import WeaponDataType from "../../data_type";

export default {
    alt: ["chenshazhifangchui", "辰砂之纺锤", "cinnabarspindle"],
    baseAtkFamily: "atk41",
    secondary: {
        name: "defendPercentage",
        family: "def150"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.rate) {
            const value = that.refine * 0.1 + 0.3;
            const rate = that.args.rate;
            attribute.eDefRatio += value * rate;
        }
    }
} as WeaponDataType