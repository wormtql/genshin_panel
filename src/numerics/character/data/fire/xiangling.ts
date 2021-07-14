import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Fire,
    alt: ["xiangling", "香菱"],
    life: [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875],
    attack: [19, 48, 63, 94, 104, 119, 133, 148, 158, 174, 184, 200, 210, 225],
    defend: [56, 144, 186, 279, 308, 355, 394, 441, 470, 517, 546, 593, 623, 669],
    secondary: {
        name: "elementalMastery",
        family: "em96"
    },
    weapon: WeaponType.Stick,
} as CharacterDataType