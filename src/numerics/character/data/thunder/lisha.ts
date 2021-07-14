import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Thunder,
    alt: ["lisha", "丽莎", "lisa"],
    life: [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570],
    attack: [19, 50, 64, 96, 107, 123, 136, 153, 163, 179, 189, 205, 215, 232],
    defend: [48, 123, 159, 239, 264, 304, 338, 378, 403, 443, 468, 508, 534, 573],
    secondary: {
        name: "elementalMastery",
        family: "em96"
    },
    weapon: WeaponType.Book,
} as CharacterDataType