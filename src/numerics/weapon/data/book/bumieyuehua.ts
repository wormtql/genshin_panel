import { Weapon } from "../../../.."
import Attribute from "../../../../attribute/attribute"
import WeaponDataType from "../../data_type"

export default {
    alt: ["bumieyuehua", "不灭月华", "everlastingmoonglow"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "lifePercentage",
        family: "hp108"
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;
        attribute.cureEffect += that.refine * 0.025 + 0.075;

        attribute.lifeRatio += 0.005 * that.refine + 0.005;
    }
} as WeaponDataType