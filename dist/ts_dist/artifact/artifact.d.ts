import Attribute from "../attribute/attribute";
import { ArtifactSetName, ArtifactTypeName } from "./artifact_type";
import { SecondaryTagName } from "../common/type";
export default class Artifact {
    level: number;
    star: number;
    position: ArtifactTypeName;
    setName: ArtifactSetName;
    tag1: {
        [key in SecondaryTagName]?: number;
    };
    tag2: {
        [key in SecondaryTagName]?: number;
    };
    constructor(level: number, star: number, position: ArtifactTypeName, setName: ArtifactSetName);
    addTag1(name: SecondaryTagName, value: number): void;
    addTag2(name: SecondaryTagName, value: number): void;
    apply(attr: Attribute): void;
}
