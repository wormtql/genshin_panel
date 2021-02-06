import Attribute from "../attribute/attribute";
import Artifact from "./artifact";
import Param from "./param";
export default class ArtifactSet {
    arts: Artifact[];
    constructor();
    addArtifact(artifact: Artifact): void;
    length(): number;
    get(i: number): Artifact;
    apply(attribute: Attribute, params: undefined | Param | null): void;
}
