import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Fire,
    alt: ["keli", "klee", "可莉"],
    life: [801, 2077, 2764, 4136, 4623, 5319, 5970, 6673, 7161, 7870, 8358, 9076, 9563, 10287],
    attack: [24, 63, 84, 125, 140, 161, 180, 202, 216, 238, 253, 274, 289, 311],
    defend: [48, 124, 165, 247, 276, 318, 357, 399, 428, 470, 500, 542, 572, 615],
    secondary: {
        name: "fireBonus",
        family: "bonus288"
    },
    weapon: WeaponType.Book,
} as CharacterDataType