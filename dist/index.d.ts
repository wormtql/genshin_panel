import { Attribute } from "./attribute";
import { Param, IArtifact } from "./artifact";
import { CharacterInterface, WeaponInterface } from "./common/type";
export { getCharacterAttribute, getWeaponAttribute, supportedCharacters, supportedWeapons } from "./numeric";
export { apply as applyArtifacts } from "./artifact";
export { newAttribute } from "./attribute";
export declare function compose(character: string | CharacterInterface, weapon: string | WeaponInterface, artifacts?: IArtifact[], params?: Param): Attribute | null;
