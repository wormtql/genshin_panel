import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Rock,
    alt: ["huanglongyidou", "荒泷一斗", "aratakiitto"],
    life: [1001, 2579, 3455, 5170, 5779, 6649, 7462, 8341, 8951, 9838, 10448, 11345, 11954, 12858],
    attack: [18, 46, 61, 91, 102, 117, 132, 147, 158, 174, 185, 200, 211, 227],
    defend: [75, 194, 258, 386, 431, 496, 557, 622, 668, 734, 779, 846, 892, 959],
    secondary: {
        name: "critical",
        family: "cr192",
    },
    weapon: WeaponType.Sword2,
} as CharacterDataType