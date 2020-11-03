import { Attribute } from "../attribute/attribute";
import { ArtifactSet, ArtifactType } from "./artifact_type";
import { TagType, TagName } from "./tag_type";
export declare class Artifact {
    position: ArtifactType;
    setName: ArtifactSet;
    mainTag: TagType;
    secondaryTags: TagType[];
    constructor(position: ArtifactType, setName: ArtifactSet);
    setPrimaryTag(tag: TagName, value: number): void;
    addSecondaryTag(tag: TagName, value: number): void;
    private applySingle;
    apply(attribute: Attribute): void;
}
