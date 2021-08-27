import Attribute from "../attribute/attribute";
import ApplyContext from "../common/context";
import Artifact from "./artifact";
import applyArtifactSet from "./effects";
import Param from "./param";

export default class ArtifactSet {
    arts: Artifact[];

    constructor() {
        this.arts = [];
    }

    addArtifact(artifact: Artifact) {
        this.arts.push(artifact);
    }

    length() {
        return this.arts.length;
    }

    get(i: number) {
        return this.arts[i];
    }

    applyBasic(attribute: Attribute) {
        for (let art of this.arts) {
            art.apply(attribute);
        }
    }

    applyEffect(attribute: Attribute, ctx: ApplyContext, params: undefined | Param | null) {
        applyArtifactSet(attribute, ctx, params, this);
    }
}