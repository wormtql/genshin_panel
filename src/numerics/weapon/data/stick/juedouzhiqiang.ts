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

        if (that.args.enemyAbove2) {
            let percentage = that.refine * 0.04 + 0.12;
            attribute.attackPercentage += attribute.attackBasic * percentage;
            attribute.defendPercentage += attribute.defendBasic * percentage;
        } else {
            let percentage = that.refine * 0.06 + 0.18;
            attribute.attackPercentage += attribute.attackBasic * percentage;
        }
    }
} as WeaponDataType