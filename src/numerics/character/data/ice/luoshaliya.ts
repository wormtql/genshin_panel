import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Ice,
    alt: ["luoshaliya", "罗莎莉亚", "rosaria"],
    life: [1030, 2647, 3417, 5118, 5665, 6516, 7245, 8096, 8643, 9493, 10040, 10891, 11438, 12289],
    attack: [20, 52, 67, 100, 111, 127, 141, 158, 169, 185, 196, 213, 223, 240],
    defend: [60, 153, 197, 296, 327, 376, 418, 468, 499, 548, 580, 629, 661, 710    ],
    secondary: {
        name: "attackPercentage",
        family: "atk240",
    },
    weapon: WeaponType.Stick,
} as CharacterDataType