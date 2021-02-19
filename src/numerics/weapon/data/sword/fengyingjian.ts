import Weapon from "../../weapon";
import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";

export default {
    alt: ["fengyingjian", "风鹰剑", "aquilafavonia"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        let percentage = that.refine * 0.05 + 0.15;
        
        attribute.attackPercentage += attribute.attackBasic * percentage;
    },
    baseAtkFamily: "atk48",
    secondary: {
        name: "physicalBonus",
        family: "physical90"
    }
} as WeaponDataType