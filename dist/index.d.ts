import { Attribute } from "./attribute";
import { Param, IArtifact } from "./artifact";
export { getCharacterAttribute, getWeaponAttribute } from "./numeric";
export { apply as applyArtifacts } from "./artifact";
export { newAttribute } from "./attribute";
export declare function compose(character: string, weapon: string, artifacts?: IArtifact[], params?: Param): Attribute | null;
