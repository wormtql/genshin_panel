import { Attribute } from "./attribute";
import { Param, IArtifact } from "./artifact";
import { CharacterInterface, WeaponInterface, BonusItemInterface } from "./common";
export { getCharacterAttribute, getWeaponAttribute, supportedCharacters, supportedWeapons } from "./numeric";
export { apply as applyArtifacts } from "./artifact";
export { newAttribute } from "./attribute";
export * from "./info";
export declare function compose(character: string | CharacterInterface, weapon: string | WeaponInterface, artifacts?: IArtifact[], params?: Param): Attribute | null;
export declare function compose2(bonus: BonusItemInterface[], arts?: IArtifact[], params?: Param): Attribute;
