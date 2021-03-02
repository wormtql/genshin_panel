import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["limingshenjian", "黎明神剑", "harbingerofdawn"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        
        if (that.args.lifeAbove90) {
            let percentage = 0.035 * that.refine + 0.105;
            attribute.crit(percentage);
        }
    },
    baseAtkFamily: "atk39",
    secondary: {
        name: "criticalDamage",
        family: "cd102"
    },
} as WeaponDataType