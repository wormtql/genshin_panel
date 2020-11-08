import { Attribute } from "../../attribute/index";
import { CharacterInterface } from "../../common/type";
export declare const supportedCharacters: () => string[];
export declare function applyPrimary(attribute: Attribute, c: CharacterInterface): void;
export declare function applySecondary(attribute: Attribute, c: CharacterInterface): void;
export declare function getAttribute(what: string): CharacterInterface | null;
