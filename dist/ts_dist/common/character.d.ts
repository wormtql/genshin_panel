import { CharacterInterface } from "./type";
import Attribute from "../attribute/attribute";
export default class Character {
    name: string;
    eng: string;
    star: number;
    level: number;
    ascend: boolean;
    constellation: number;
    attribute: CharacterInterface;
    constructor(name: string, level: string, constellation: number);
    applyPrimary(attribute: Attribute): void;
    applySecondary(attribute: Attribute): void;
}
