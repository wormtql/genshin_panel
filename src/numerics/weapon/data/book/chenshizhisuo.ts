import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["chenshizhisuo", "尘世之锁", "memoryofdust"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "attackPercentage",
        family: "atk108"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = 0.05 * that.refine + 0.15;
        attribute.shield += value;
    }
} as WeaponDataType