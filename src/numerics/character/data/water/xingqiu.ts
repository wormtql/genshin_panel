import Attribute from "../../../../attribute/attribute";
import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import Character from "../../character";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Water,
    alt: ["xingqiu", "行秋"],
    life: [857, 2202, 2842, 4257, 4712, 5420, 6027, 6735, 7190, 7897, 8352, 9060, 9514, 10222],
    attack: [17, 43, 56, 84, 93, 107, 119, 133, 142, 156, 165, 179, 188, 202],
    defend: [64, 163, 211, 316, 349, 402, 447, 499, 533, 585, 619, 671, 705, 758],
    secondary: {
        name: "attackPercentage",
        family: "atk240"
    },
    applyTalent(attribute: Attribute) {
        let that = this as any as Character;
        if (that.hasTalent2) {
            attribute.waterBonus += 0.2;
        }
    },
    weapon: WeaponType.Sword,
} as CharacterDataType