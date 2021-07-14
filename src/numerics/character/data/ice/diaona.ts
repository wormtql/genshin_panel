import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Ice,
    alt: ["diaona", "迪奥娜", "diona"],
    life: [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570],
    attack: [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212],
    defend: [50, 129, 167, 250, 277, 318, 354, 396, 422, 464, 491, 532, 559, 601],
    secondary: {
        name: "iceBonus",
        family: "bonus240",
    },
    weapon: WeaponType.Bow,
} as CharacterDataType