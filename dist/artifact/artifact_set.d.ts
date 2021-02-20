import Attribute from "../attribute/attribute";
import ApplyContext from "../common/context";
import Artifact from "./artifact";
import Param from "./param";
export default class ArtifactSet {
    arts: Artifact[];
    constructor();
    addArtifact(artifact: Artifact): void;
    length(): number;
    get(i: number): Artifact;
    apply(attribute: Attribute, ctx: ApplyContext, params: undefined | Param | null): void;
}
