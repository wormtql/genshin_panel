import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Fire,
    alt: ["tuoma", "托马", "touma"],
    life: [866, 2225, 2872, 4302, 4762, 5478, 6091, 6806, 7266, 7981, 8440, 9156, 9616, 10331],
    attack: [17, 43, 56, 84, 93, 107, 119, 133, 142, 156, 165, 179, 188, 202],
    defend: [63, 162, 209, 313, 346, 398, 443, 495, 528, 580, 613, 665, 699, 751],
    secondary: {
        name: "attackPercentage",
        family: "atk240",
    },
    weapon: WeaponType.Stick,
} as CharacterDataType