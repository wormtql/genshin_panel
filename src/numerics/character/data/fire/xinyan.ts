import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Fire,
    alt: ["xinyan", "辛焱"],
    life: [939, 2413, 3114, 4665, 5163, 5939, 6604, 7379, 7878, 8653, 9151, 9927, 10425, 11201],
    attack: [21, 54, 69, 103, 115, 132, 147, 164, 175, 192, 203, 220, 231, 249],
    defend: [67, 172, 222, 333, 368, 423, 471, 526, 562, 617, 652, 708, 743, 799],
    secondary: {
        name: "attackPercentage",
        family: "atk240"
    },
    weapon: WeaponType.Sword2,
} as CharacterDataType