import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["guanhonhzhishuo", "贯虹之槊", "vortexvanquisher"],
    baseAtkFamily: "atk46",
    secondary: {
        name: "attackPercentage",
        family: "atk108"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.05 + 0.15;
        attribute.shield += value;

        value = that.refine * 0.01 + 0.03;
        attribute.attackPercentage += attribute.attackBasic * value * 2.5;
    }
} as WeaponDataType