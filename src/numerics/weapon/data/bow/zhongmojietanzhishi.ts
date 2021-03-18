import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["zhongmojietanzhishi", "终末嗟叹之诗", "elegyfortheend"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "recharge",
        family: "recharge120",
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 15 + 45;
        attribute.elementalMastery += value;
    },
} as WeaponDataType