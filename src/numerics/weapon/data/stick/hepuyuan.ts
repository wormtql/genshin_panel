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

        let value = that.refine * 0.007 + 0.025;
        attribute.attackPercentage += attribute.attackBasic * value * 3;
    }
} as WeaponDataType