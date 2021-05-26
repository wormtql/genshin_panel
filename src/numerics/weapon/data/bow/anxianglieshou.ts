import { Weapon } from "../../../..";
import Attribute from "../../../../attribute/attribute";
import WeaponDataType from "../../data_type";

export default {
    alt: ["anxianglieshou", "暗巷猎手", "alleyhunter"],
    baseAtkFamily: "atk44",
    secondary: {
        name: "attackPercentage",
        family: "atk60"
    },
    effect: function (attribute: Attribute) {
        let that = this as any as Weapon

        if (that.args.level) {
            let value = 0.005 * that.refine + 0.015;
            let level = Math.min(that.args.level, 10);
            
            attribute.bonus += value * level;
        }
    },
} as WeaponDataType