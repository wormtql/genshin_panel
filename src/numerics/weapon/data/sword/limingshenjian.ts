import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["limingshenjian", "黎明神剑", "harbingerofdawn"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        let percentage = that.refine * 0.025 + 0.115;
        
        attribute.critical += percentage;
    },
    baseAtkFamily: "atk39",
    secondary: {
        name: "criticalDamage",
        family: "cd102"
    },
} as WeaponDataType