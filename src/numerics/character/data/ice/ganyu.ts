import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Ice,
    alt: ["ganyu", "甘雨"],
    life: [763, 1978, 2632, 3939, 4403, 5066, 5686, 6355, 6820, 7495, 7960, 8643, 9108, 9797],
    attack: [26, 68, 90, 135, 151, 173, 194, 217, 233, 256, 272, 295, 311, 335],
    defend: [49, 127, 169, 253, 283, 326, 366, 409, 439, 482, 512, 556, 586, 630],
    secondary: {
        name: "criticalDamage",
        family: "cd384",
    },
    weapon: WeaponType.Bow,
} as CharacterDataType