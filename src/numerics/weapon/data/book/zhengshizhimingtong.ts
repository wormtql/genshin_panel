import WeaponDataType from "../../data_type";
import Weapon from "../../weapon";

export default {
    alt: ["zhengshizhimingtong", "证誓之明瞳"],
    baseAtkFamily: "atk44",
    secondary: {
        name: "attackPercentage",
        family: "atk60"
    },
    effect(attribute) {
        let that = this as any as Weapon

        if (that.args.rate) {
            let value = that.refine * 0.06 + 0.18
            attribute.recharge += value * that.args.rate
        }
    }
} as WeaponDataType