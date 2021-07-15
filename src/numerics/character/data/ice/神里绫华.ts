import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Ice,
    alt: ["shenlilinghua", "神里绫华", "kamisatoayaka"],
    life: [1011, 2597, 3455, 5170, 5779, 6649, 7462, 8341, 8951, 9838, 10448, 11345, 11954, 12858],
    attack: [27, 69, 92, 138, 154, 177, 198, 222, 238, 262, 278, 302, 318, 342],
    defend: [61, 158, 211, 315, 352, 405, 455, 509, 546, 600, 637, 692, 729, 784],
    secondary: {
        name: "criticalDamage",
        family: "cd384",
    },
    weapon: WeaponType.Sword,
} as CharacterDataType