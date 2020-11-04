import { Attribute } from "./attribute";
import { Param, Artifact, ArtifactType, ArtifactSet } from "./artifact";
import { TagName } from "./artifact/tag_type";
export { getCharacterAttribute, getWeaponAttribute } from "./numeric";
export { Artifact, apply as applyArtifacts } from "./artifact";
export { newAttribute } from "./attribute";
export interface IArtifact {
    position: ArtifactType;
    setName: ArtifactSet;
    primary: {
        tag: TagName;
        value: number;
    };
    secondary: {
        tag: TagName;
        value: number;
    }[];
}
export declare function compose(character: string, weapon: string, artifacts?: IArtifact[] | Artifact[], params?: Param): Attribute | null;
