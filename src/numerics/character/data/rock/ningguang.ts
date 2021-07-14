import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Rock,
    alt: ["ningguang", "凝光"],
    life: [821, 2108, 2721, 4076, 4512, 5189, 5770, 6448, 6884, 7561, 7996, 8674, 9110, 9787],
    attack: [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212],
    defend: [48, 123, 159, 239, 264, 304, 338, 378, 403, 443, 468, 508, 534, 573],
    secondary: {
        name: "rockBonus",
        family: "bonus240",
    },
    weapon: WeaponType.Book,
} as CharacterDataType