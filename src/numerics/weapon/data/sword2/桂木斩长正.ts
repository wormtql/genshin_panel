import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";
import Weapon from "../../weapon";

export default {
    alt: ["guimuzhanchangzheng", "桂木斩长正", "katsuragikirinagamasa"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "recharge",
        family: "recharge100",
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;
        let value = that.refine * 0.015 + 0.045;
        attribute.eBonus += value;
    }
} as WeaponDataType