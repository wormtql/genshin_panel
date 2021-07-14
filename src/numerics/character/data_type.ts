import Attribute from "../../attribute/attribute";
import { Element } from "../../common/element";
import { SecondaryTagName } from "../../common/type";
import WeaponType from "../weapon/weapon_type";

export default interface CharacterDataType {
    element: Element,
    alt: string[],
    life: number[],
    attack: number[],
    defend: number[],
    secondary: {
        name: SecondaryTagName,
        family: string,
    },
    weapon: WeaponType;
    // createTalent?: () => ((attribute: Attribute) => void) | null;
    applyTalent: (attribute: Attribute) => null;
    constellation?: (attribute: Attribute) => void;
}