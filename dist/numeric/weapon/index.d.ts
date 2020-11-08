import { Attribute } from "../../attribute";
import { WeaponInterface } from "../../common/type";
export declare const supportedWeapons: () => string[];
export declare function applyPrimary(attribute: Attribute, w: WeaponInterface): void;
export declare function applySecondary(attribute: Attribute, w: WeaponInterface): void;
export declare function getAttribute(what: string): WeaponInterface | null;
