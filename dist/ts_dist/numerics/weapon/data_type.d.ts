import Attribute from "../../attribute/attribute";
import { SecondaryTagName } from "../../common/type";
export default interface WeaponDataType {
    alt: string[];
    baseAtkFamily: string;
    effect?: (attribute: Attribute) => void;
    secondary?: {
        name: SecondaryTagName;
        family: string;
    };
}
