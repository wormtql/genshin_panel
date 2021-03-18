import { Weapon } from "../../../.."
import Attribute from "../../../../attribute/attribute"
import WeaponDataType from "../../data_type"

export default {
    alt: ["anxiangshanguang", "暗巷闪光", "thealleyflash"],
    baseAtkFamily: "atk45",
    secondary: {
        name: "elementalMastery",
        family: "em12"
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;

        if (that.args.undamaged) {
            let value = that.refine * 0.03 + 0.09;
            attribute.bonus += value;
        }
    }
} as WeaponDataType