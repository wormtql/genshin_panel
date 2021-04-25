import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tiankongzhijuan", "天空之卷", "skywardatlas"],
    baseAtkFamily: "atk48",
    secondary: {
        name: "attackPercentage",
        family: "atk72"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let value = that.refine * 0.03 + 0.09;
        attribute.elementalBonus(value);
    }
} as WeaponDataType