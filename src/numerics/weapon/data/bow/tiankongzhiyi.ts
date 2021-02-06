import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tiankongzhiyi", "天空之翼", "skywardharp"],
    baseAtkFamily: "atk48",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let percentage = that.refine * 0.05 + 0.15;
        attribute.criticalDamage += percentage;
    },
    secondary: {
        name: "critical",
        family: "cr48"
    }
} as WeaponDataType