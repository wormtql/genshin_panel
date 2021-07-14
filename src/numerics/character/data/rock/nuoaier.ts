import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Rock,
    alt: ["nuoaier", "诺艾尔", "noelle"],
    life: [1012, 2600, 3356, 5027, 5564, 6400, 7117, 7953, 8490, 9325, 9862, 10698, 11235, 12071],
    attack: [16, 41, 53, 80, 88, 101, 113, 126, 134, 148, 156, 169, 178, 191],
    defend: [67, 172, 222, 333, 368, 423, 471, 526, 562, 617, 652, 708, 743, 799],
    secondary: {
        name: "defendPercentage",
        family: "def300"
    },
    weapon: WeaponType.Sword2,
} as CharacterDataType