import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["xizai", "xizai", "calamityqueller"],
    baseAtkFamily: "atk49",
    secondary: {
        name: "attackPercentage",
        family: "atk36"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        attribute.elementalBonus(0.03 * that.refine + 0.09);

        if (that.args.level) {
            const level = that.args.level ?? 0;
            const isBackend = that.args.isBackend ?? false;
            const value = (0.008 * that.refine + 0.024) * level * (isBackend ? 2 : 1);

            attribute.attackPercentage += attribute.attackBasic * value;
        }
    }
} as WeaponDataType