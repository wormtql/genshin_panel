import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default {
    element: Element.Ice,
    alt: ["chongyun", "重云"],
    life: [921, 2366, 3054, 4574, 5063, 5824, 6475, 7236, 7725, 8485, 8974, 9734, 10223, 10984],
    attack: [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 197, 208, 223],
    defend: [54, 140, 180, 270, 299, 344, 382, 427, 456, 501, 530, 575, 603, 648],
    secondary: {
        name: "attackPercentage",
        family: "atk240",
    },
    weapon: WeaponType.Sword2,
} as CharacterDataType