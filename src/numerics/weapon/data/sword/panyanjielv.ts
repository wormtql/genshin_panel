import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["panyanjielv", "磐岩结绿", "primordialjadecutter"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;
        let percentage = that.refine * 0.05 + 0.15;
        
        attribute.lifePercentage += attribute.lifeBasic * percentage;
        percentage = that.refine * 0.003 + 0.009;
        attribute.attackPercentage += attribute.life() * percentage;
        // attribute.attackPercentage += attribute.attackBasic * percentage;
    },
    baseAtkFamily: "atk44_panyan",
    secondary: {
        name: "critical",
        family: "cr96",
    }
} as WeaponDataType