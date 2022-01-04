import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import CharacterDataType from "../../data_type";

export default <CharacterDataType> {
    element: Element.Ice,
    alt: ["shenhe", "申鹤"],
    life: [1011, 2624, 3491, 5224, 5840, 6719, 7540, 8429, 9045, 9941, 10557, 11463, 12080, 12993],
    attack: [24, 61, 82, 122, 137, 157, 176, 197, 211, 232, 247, 268, 282, 304],
    defend: [65, 168, 223, 334, 373, 429, 482, 538, 578, 635, 674, 732, 772, 830],
    secondary: {
        name: "attackPercentage",
        family: "atk288",
    },
    weapon: WeaponType.Stick,
}