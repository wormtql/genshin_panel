import { Attribute } from "../attribute/attribute";
import { Param } from "./param";
import { Artifact } from "./artifact";
export { ArtifactSet, ArtifactType } from "./artifact_type";
export { Artifact } from "./artifact";
export { Param } from "./param";
export { TagType } from "./tag_type";
export declare function apply(attribute: Attribute, artifacts: Artifact[], param: Param): void;
