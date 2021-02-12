import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["tiankongzhiren", "天空之刃", "skywardblade"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        let percentage = that.refine * 0.01 + 0.03;
        
        attribute.critical += percentage;
    },
    baseAtkFamily: "atk46",
    secondary: {
        name: "recharge",
        family: "recharge120"
    }
} as WeaponDataType