import { ArtifactSet, ArtifactType } from "./artifact_type";
import { TagName } from "./tag_type";
export interface IArtifact {
    position: ArtifactType;
    setName: ArtifactSet;
    primary: {
        [key in TagName]: number;
    };
    secondary: {
        [key in TagName]: number;
    };
}
