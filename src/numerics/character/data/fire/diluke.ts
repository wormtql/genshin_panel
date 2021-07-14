import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Fire,
    alt: ["diluke", "diluc", "迪卢克"],
    life: [1011, 2621, 3488, 5219, 5834, 6712, 7533, 8421, 9036, 9932, 10547, 11453, 12068, 12981],
    attack: [26, 68, 90, 135, 151, 173, 194, 217, 233, 256, 272, 295, 311, 335],
    defend: [61, 158, 211, 315, 352, 405, 455, 509, 546, 600, 637, 692, 729, 784],
    secondary: {
        name: "critical",
        family: "cr192",
    },
    weapon: WeaponType.Sword2,
} as CharacterDataType