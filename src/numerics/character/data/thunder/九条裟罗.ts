import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Thunder,
    alt: ["jiutiaoshaluo", "九条裟罗", "kujousara"],
    life: [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570],
    attack: [16, 42, 54, 81, 90, 104, 115, 129, 137, 151, 160, 173, 182, 195],
    defend: [53, 135, 175, 262, 289, 333, 370, 414, 442, 485, 513, 556, 584, 628],
    secondary: {
        name: "attackPercentage",
        family: "atk240"
    },
    weapon: WeaponType.Bow,
} as CharacterDataType