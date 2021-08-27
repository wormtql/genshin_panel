import Artifact from "../artifact/artifact";
import ArtifactSet from "../artifact/artifact_set";
import Attribute from "../attribute/attribute";
import Character from "../numerics/character/character";
import { applySecondaryTag } from "../common/common";
import { SecondaryTagName } from "../common/type";
import Weapon from "../numerics/weapon/weapon";
import ApplyContext from "../common/context";
import Param from "../artifact/param";


export default class AttributeBuilder {
    _character: Character | null;
    _weapon: Weapon | null;
    _artifacts: ArtifactSet;

    _single: any;
    _useWeaponEffect: boolean;
    _artifactsConfig: Param;

    constructor() {
        this._character = null;
        this._weapon = null;
        this._artifacts = new ArtifactSet();

        this._single = [];
        this._useWeaponEffect = true;
        this._artifactsConfig = {};
    }


    weaponEffect(value: boolean) {
        this._useWeaponEffect = value;
    }

    character(value: Character): AttributeBuilder {
        this._character = value;

        return this;
    }

    weapon(value: Weapon): AttributeBuilder {
        this._weapon = value;

        return this;
    }

    artifact(art: Artifact): AttributeBuilder {
        this._artifacts.addArtifact(art);

        return this;
    }

    artifacts(arts: ArtifactSet | Artifact[]): AttributeBuilder {
        if (arts instanceof ArtifactSet) {
            for (let i = 0; i < arts.length(); i++) {
                this.artifact(arts.get(i));
            }
        } else if (Array.isArray(arts)) {
            for (let item of arts) {
                if (item instanceof Artifact) {
                    this.artifact(item);
                }
            }
        }

        return this;
    }

    single(key: SecondaryTagName, value: number): AttributeBuilder {
        this._single.push({
            key,
            value,
        });

        return this;
    }

    artifactsConfig(config: Param): AttributeBuilder {
        this._artifactsConfig = config;

        return this;
    }

    // 1. weapon basic
    // 2. character basic
    // 3. weapon secondary
    // 4. character secondary
    // 5. artifacts basic
    // 6. character talent
    // 7. artifacts effect
    // 7. weapon effects
    build(): Attribute {
        if (this._character === null || this._weapon === null) {
            throw new Error("weapon and character must be specified");
        }

        let attribute = new Attribute();

        // apply primary
        if (this._weapon) {
            this._weapon.applyPrimary(attribute);
        }
        if (this._character) {
            this._character.applyPrimary(attribute);
        }

        // apply secondary
        if (this._weapon) {
            this._weapon.applySecondary(attribute);
        }
        if (this._character) {
            this._character.applySecondary(attribute);
        }

        let context: ApplyContext = {
            character: this._character,
            weapon: this._weapon,
        };

        // apply artifacts basic
        this._artifacts.applyBasic(attribute);
        // apply artifacts effect
        this._artifacts.applyEffect(attribute, context, this._artifactsConfig);

        // character talent
        this._character.applyTalent(attribute);

        // apply weapon effect
        if (this._weapon && this._useWeaponEffect) {
            this._weapon?.applyEffect(attribute, this._character);
        }

        attribute.applyLazy();
        
        return attribute;
    }
}