import { Weapon } from "./type";
import { Attribute } from "../../attribute";
export declare function getAttribute(what: string): Weapon | null;
export declare function addWeaponAttribute(attribute: Attribute, weaponAttribute: Weapon): void;
