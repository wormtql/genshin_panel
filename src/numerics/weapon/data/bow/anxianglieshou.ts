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

        if (that.args.backendSeconds) {
            let p = that.args.backendSeconds * (0.005 * that.refine + 0.015);
            p = Math.min(p, 0.05 * that.refine + 0.15);
            
            attribute.bonus += p;
        }
    },
} as WeaponDataType