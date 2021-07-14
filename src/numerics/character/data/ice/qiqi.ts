import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Ice,
    alt: ["qiqi", "七七"],
    life: [963, 2498, 3323, 4973, 5559, 6396, 7178, 8023, 8610, 9463, 10050, 10912, 11499, 12368],
    attack: [22, 58, 77, 115, 129, 148, 167, 186, 200, 220, 233, 253, 267, 287],
    defend: [72, 186, 248, 371, 415, 477, 535, 598, 642, 706, 749, 814, 857, 922],
    secondary: {
        name: "cureEffect",
        family: "cure222"
    },
    weapon: WeaponType.Sword,
} as CharacterDataType