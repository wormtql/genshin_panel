import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Fire,
    alt: ["yanfei", "烟绯"],
    life: [784, 2014, 2160, 3895, 4311, 4959, 5514, 6161, 6578, 7225, 7641, 8289, 8705, 9352],
    attack: [20, 52, 67, 100, 111, 127, 141, 158, 169, 185, 196, 213, 223, 240],
    defend: [49, 126, 163, 244, 271, 311, 346, 387, 413, 453, 480, 520, 546, 587],
    secondary: {
        name: "fireBonus",
        family: "bonus240",
    },
    weapon: WeaponType.Book,
} as CharacterDataType