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

    constructor() {
        this.tag1 = [];
        this.tag2 = [];

        this._level = -1;
        this._star = -1;

        this._position = "";
        this._setName = "";
    }

    level(value: number): ArtifactBuilder {
        this._level = value;
        return this;
    }

    star(value: number): ArtifactBuilder {
        this._star = value;
        return this;
    }

    position(value: ArtifactTypeName): ArtifactBuilder {
        this._position = value;
        return this;
    }

    setName(value: ArtifactSetName): ArtifactBuilder {
        this._setName = value;
        return this;
    }

    mainTag(name: SecondaryTagName, value: number): ArtifactBuilder {
        this.tag1.push({
            name, value
        });

        return this;
    }

    tag(name: SecondaryTagName, value: number): ArtifactBuilder {
        this.tag2.push({
            name, value
        });

        return this;
    }

    private check(): boolean {
        if (this._position === "") {
            return false;
        }

        if (this._setName === "") {
            return false;
        }

        return true;
    }

    build(): Artifact {
        if (!this.check()) {
            throw "typename and setname must be given";
        }

        let art = new Artifact(this._level, this._star, this._position as ArtifactTypeName, this._setName as ArtifactSetName);
        for (let item of this.tag1) {
            art.addTag1(item.name as SecondaryTagName, item.value);
        }
        for (let item of this.tag2) {
            art.addTag2(item.name as SecondaryTagName, item.value);
        }

        return art;
    }
}