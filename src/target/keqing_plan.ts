import { Element } from "../common/element";
import { physicalDamage, elementalDamage } from "./average_damage";


const DAMAGE_BA = 3

export const noHeavy = elementalDamage(Element.Thunder, 1, DAMAGE_BA);

export const physical = physicalDamage(0.75, DAMAGE_BA);