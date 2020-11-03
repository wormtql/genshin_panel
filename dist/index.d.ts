import { Attribute } from "./attribute";
import { Param, Artifact } from "./artifact";
export { getCharacterAttribute, getWeaponAttribute, getAttribute } from "./numeric";
export * from "./artifact";
export { newAttribute } from "./attribute";
export declare function composeBasic(character: string, weapon: string): Attribute | null;
export declare function compose(character: string, weapon: string, artifacts: Artifact[], params?: Param): Attribute | null;
