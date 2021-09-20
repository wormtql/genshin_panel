import Attribute from "../../../../attribute/attribute";
import { Element } from "../../../../common/element";
import WeaponType from "../../../weapon/weapon_type";
import Character from "../../character";
import CharacterDataType from "../../data_type";

export default <CharacterDataType> {
    element: Element.Water,
    alt: ["shanhugongxinhai", "珊瑚宫心海", "sangonomiyakokomi"],
    life: [1049, 2720, 3619, 5416, 6055, 6966, 7818, 8738, 9377, 10306, 10945, 11885, 12524, 13471],
    attack: [18, 47, 63, 94, 105, 121, 136, 152, 163, 179, 190, 207, 218, 234],
    defend: [51, 133, 177, 264, 295, 340, 381, 426, 457, 503, 534, 580, 611, 657],
    secondary: {
        name: "waterBonus",
        family: "bonus288"
    },
    applyTalent(attribute: Attribute) {
        // let that = this as any as Character;
        
        attribute.cureEffect += 0.25;
        attribute.crit(-1);
    },
    weapon: WeaponType.Book,
}