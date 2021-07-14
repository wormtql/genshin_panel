import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Thunder,
    alt: ["feixieer", "菲谢尔", "fischl"],
    life: [770, 1979, 2555, 3827, 4236, 4872, 5418, 6054, 6463, 7099, 7508, 8144, 8553, 9189],
    attack: [20, 53, 68, 102, 113, 130, 144, 161, 172, 189, 200, 216, 227, 244],
    defend: [50, 128, 165, 247, 274, 315, 350, 391, 418, 459, 485, 526, 553, 594],
    secondary: {
        name: "attackPercentage",
        family: "atk240"
    },
    weapon: WeaponType.Bow,
} as CharacterDataType