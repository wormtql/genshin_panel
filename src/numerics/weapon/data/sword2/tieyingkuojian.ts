import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tieyingkuojian", "铁影阔剑", "ferrousshadow"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.05 + 0.25;
        attribute.bBonus += value;
    },
    baseAtkFamily: "atk39",
    secondary: {
        name: "lifePercentage",
        family: "hp77",
    }
} as WeaponDataType