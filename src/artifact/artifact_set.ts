import Attribute from "../attribute/attribute";
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

    apply(attribute: Attribute, params: undefined | Param | null) {
        for (let art of this.arts) {
            art.apply(attribute);
        }

        applyArtifactSet(attribute, params, this);
    }
}