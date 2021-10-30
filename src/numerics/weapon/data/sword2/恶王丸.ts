import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";
import Weapon from "../../weapon";

export default {
    alt: ["wyuwan", "ewangwan", "恶王丸", "akuoumaru"],
    baseAtkFamily: "atk42",
    secondary: {
        name: "attackPercentage",
        family: "atk90",
    },
    effect(attribute: Attribute) {
        let that = this as any as Weapon;
        
        if (that.args.totalEnergy) {
            let e = that.args.totalEnergy;
            e = Math.max(e, 0);
            const value = Math.min(
                0.1 * that.refine + 0.3,
                (0.0003 * that.refine + 0.0009) * e
            );
            attribute.qBonus += value;
        }
    }
} as WeaponDataType