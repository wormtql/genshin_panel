import { ArtifactSet, ArtifactType } from "./artifact_type";
import { SecondaryTagName } from "../common/type";
export interface IArtifact {
    position: ArtifactType;
    setName: ArtifactSet;
    primary: {
        [key in SecondaryTagName]: number;
    };
    secondary: {
        [key in SecondaryTagName]: number;
    };
}
