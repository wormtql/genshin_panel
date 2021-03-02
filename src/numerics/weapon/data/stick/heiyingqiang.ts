import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";
import Weapon from "../../weapon";

export default {
    alt: ["heiyingqiang", "黑缨枪", "blacktassel"],
    baseAtkFamily: "atk38",
    secondary: {
        name: "lifePercentage",
        family: "hp102"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        if (that.args.slime) {
            attribute.bonus += that.refine * 0.1 + 0.3;
        }
    }
} as WeaponDataType