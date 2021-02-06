import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["juedouzhiqiang", "决斗之枪", "deathmatch"],
    baseAtkFamily: "atk41",
    secondary: {
        name: "critical",
        family: "cr80",
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = 0.04 * that.refine + 0.12;
        attribute.attackPercentage += attribute.attackBasic * value * 1.25;
    }
} as WeaponDataType