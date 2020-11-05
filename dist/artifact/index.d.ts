import { Attribute } from "../attribute/attribute";
import { Param } from "./param";
import { IArtifact } from "./artifact";
export { ArtifactSet, ArtifactType } from "./artifact_type";
export { IArtifact } from "./artifact";
export { Param } from "./param";
export declare function apply(attribute: Attribute, artifacts: IArtifact[], param: Param): void;
