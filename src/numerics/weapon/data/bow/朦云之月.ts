import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["mengyunzhiyue", "朦云之月"],
    baseAtkFamily: "atk44",
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        if (that.args.totalEnergy) {
            let e = that.args.totalEnergy;
            e = Math.max(e, 0);
            let bonus = Math.min(
                (0.0003 * that.refine + 0.0009) * e,
                0.1 * that.refine + 0.3,
            );
            attribute.qBonus += bonus;
        }
    },
    secondary: {
        name: "attackPercentage",
        family: "atk60"
    }
} as WeaponDataType