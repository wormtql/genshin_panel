import Attribute from "../../attribute/attribute"
import { SecondaryTagName } from "../../common/type";
import Character from "../character/character";

export default interface WeaponDataType {
    alt: string[];
    baseAtkFamily: string;
    effect?: (attribute: Attribute, character?: Character) => void;
    secondary?: {
        name: SecondaryTagName,
        family: string,
    }
}