import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["ganglungong", "钢轮弓", "compoundbow"],
    baseAtkFamily: "atk41",
    secondary: {
        name: "physicalBonus",
        family: "physical150"
    },
    effect(attribute) {
        let that = this as any as Weapon;
        if (that.args.level) {
            let value = 0.01 * that.refine + 0.03;
            let level = Math.min(that.args.level, 4);
            attribute.atkLift(value * level);
        }
    }
} as WeaponDataType