import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["飞天御剑", "feitianyujian", "skyridersword"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        let percentage = that.refine * 0.03 + 0.09;
        
        attribute.attackPercentage += attribute.attackBasic * percentage;
    },
    baseAtkFamily: "atk38",
    secondary: {
        name: "recharge",
        family: "recharge113",
    },
} as WeaponDataType