import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["hepuyuan", "和璞鸢", "primordialjadewingedspear"],
    baseAtkFamily: "atk48",
    secondary: {
        name: "critical",
        family: "cr48",
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        if (that.args.level) {
            let value = that.refine * 0.007 + 0.025;
            let level = Math.min(that.args.level, 7);
            attribute.atkLift(value * level);
        }
        if (that.args.rate) {
            let value = that.refine * 0.03 + 0.09;
            attribute.bonus += value * that.args.rate;
        }
    }
} as WeaponDataType