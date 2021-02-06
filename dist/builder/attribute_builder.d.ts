import Artifact from "../artifact/artifact";
import ArtifactSet from "../artifact/artifact_set";
import Attribute from "../attribute/attribute";
import Character from "../numerics/character/character";
import { SecondaryTagName } from "../common/type";
import Weapon from "../numerics/weapon/weapon";
export default class AttributeBuilder {
    _character: Character | null;
    _weapon: Weapon | null;
    _artifacts: ArtifactSet;
    _single: any;
    _useWeaponEffect: boolean;
    constructor();
    weaponEffect(value: boolean): void;
    character(value: Character): AttributeBuilder;
    weapon(value: Weapon): AttributeBuilder;
    artifact(art: Artifact): AttributeBuilder;
    artifacts(arts: ArtifactSet | Artifact[]): AttributeBuilder;
    single(key: SecondaryTagName, value: number): AttributeBuilder;
    build(): Attribute;
}
