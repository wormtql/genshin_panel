import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Water,
    alt: ["babala", "芭芭拉", "barbara"],
    life: [821, 2108, 2721, 4076, 4512, 5189, 5770, 6448, 6884, 7561, 7996, 8674, 9110, 9787],
    attack: [13, 34, 44, 66, 73, 84, 94, 105, 112, 123, 130, 141, 148, 159],
    defend: [56, 144, 186, 279, 308, 355, 394, 441, 470, 517, 546, 593, 623, 669],
    secondary: {
        name: "lifePercentage",
        family: "hp240"
    },
    weapon: WeaponType.Book,
} as CharacterDataType