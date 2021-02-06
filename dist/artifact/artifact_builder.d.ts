import { SecondaryTagName } from "../common/type";
import Artifact from "./artifact";
import { ArtifactTypeName, ArtifactSetName } from "../artifact/artifact_type";
export default class ArtifactBuilder {
    tag1: any;
    tag2: any;
    _level: number;
    _star: number;
    _position: ArtifactTypeName | "";
    _setName: ArtifactSetName | "";
    constructor();
    level(value: number): ArtifactBuilder;
    star(value: number): ArtifactBuilder;
    position(value: ArtifactTypeName): ArtifactBuilder;
    setName(value: ArtifactSetName): ArtifactBuilder;
    mainTag(name: SecondaryTagName, value: number): ArtifactBuilder;
    tag(name: SecondaryTagName, value: number): ArtifactBuilder;
    private check;
    build(): Artifact;
}
