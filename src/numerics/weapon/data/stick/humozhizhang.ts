import Attribute from "../../../../attribute/attribute";
import Weapon from "../../weapon";
import WeaponDataType from "../../data_type";

export default {
    alt: ["humozhizhang", "护摩之杖", "staffofhoma"],
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon;

        let percentage = that.refine * 0.05 + 0.15;
        attribute.lifePercentage += attribute.lifeBasic * percentage;

        attribute.addLazy((a: Attribute) => {
            let p = that.refine * 0.002 + 0.006;
            
            if (that.args.lifeBelow50) {
                p += that.refine * 0.002 + 0.008;
            }

            a.attackStatic += a.life() * p;
        })
    },
    baseAtkFamily: "atk46",
    secondary: {
        name: "criticalDamage",
        family: "cd144"
    }
} as WeaponDataType