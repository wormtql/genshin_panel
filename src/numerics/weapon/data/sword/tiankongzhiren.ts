import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tiankongzhiren", "天空之刃", "skywardblade"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        let percentage = that.refine * 0.01 + 0.03;
        
        attribute.crit(percentage);

        if (that.args.passive) {
            attribute.aSpeed += 0.1;
            attribute.bSpeed += 0.1;
        }
    },
    baseAtkFamily: "atk46",
    secondary: {
        name: "recharge",
        family: "recharge120"
    }
} as WeaponDataType