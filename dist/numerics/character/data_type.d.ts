import Attribute from "../../attribute/attribute";
import { SecondaryTagName } from "../../common/type";
import WeaponType from "../weapon/weapon_type";
export default interface CharacterDataType {
    alt: string[];
    life: number[];
    attack: number[];
    defend: number[];
    secondary: {
        name: SecondaryTagName;
        family: string;
    };
    weapon: WeaponType;
    applyTalent: (attribute: Attribute) => null;
    constellation?: (attribute: Attribute) => void;
}
