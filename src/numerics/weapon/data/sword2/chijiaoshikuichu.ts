import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["chijiaoshikuichu", "赤角石溃杵", "redhornstonethresher"],
    baseAtkFamily: "atk44_panyan",
    secondary: {
        name: "criticalDamage",
        family: "cd192"
    },
    effect(attribute) {
        let that = this as any as Weapon;

        attribute.defendPercentage += attribute.defendBasic * (0.07 * that.refine + 0.21);
        const value = 0.1 * that.refine + 0.3;
        attribute.aDefRatio += value;
        attribute.bDefRatio += value;
    }
} as WeaponDataType