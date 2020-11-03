import { Attribute } from "../attribute/attribute";
import { Element } from "../common/element";
export declare function physicalDamage(ab: number, dBA: number): (attribute: Attribute) => number;
export declare function elementalDamage(element: Element, ab: number, dBA: number): (attribute: Attribute) => number | undefined;
