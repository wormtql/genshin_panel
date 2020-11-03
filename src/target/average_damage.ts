import { Attribute } from "../attribute/attribute";
import { Element } from "../common/element";


// ab: 普攻占总的频率，例如，普攻三下重击一下，ab = 0.75，如果从不重击，则ab = 1
// dBA: 重击相比普攻的倍率
export function physicalDamage(ab: number, dBA: number) {
    return function(attribute: Attribute) {
        const attack = attribute.attack1 + attribute.attack2;
        const aCritical = Math.max(attribute.critical, 1);
        const bCritical = Math.max(attribute.bCritical, 1);
    
        const aDamage = ab * attack * (aCritical * (1 + attribute.criticalDamage) + (1 - aCritical)) * (1 + attribute.aBonus);
        const bDamage = (1 - ab) * attack * dBA * (bCritical * (1 + attribute.criticalDamage) + (1 - bCritical)) * (1 + attribute.bBonus);
        const damage = (aDamage + bDamage) * (1 + attribute.physicalBonus) * (1 + attribute.bonus);
    
        return damage;
    };
}

export function elementalDamage(element: Element, ab: number, dBA: number) {
    // const base = physicalDamage(ab, dBA);

    return function(attribute: Attribute) {
        const attack = attribute.attack1 + attribute.attack2;
        const aCritical = Math.max(attribute.critical, 1);
        const bCritical = Math.max(attribute.bCritical, 1);
    
        const aDamage = ab * attack * (aCritical * (1 + attribute.criticalDamage) + (1 - aCritical)) * (1 + attribute.aBonus);
        const bDamage = (1 - ab) * attack * dBA * (bCritical * (1 + attribute.criticalDamage) + (1 - bCritical)) * (1 + attribute.bBonus);
        const damage = aDamage + bDamage;

        switch(element) {
            case Element.Fire:
                return damage * (1 + attribute.fireBonus);
            case Element.Ice:
                return damage * (1 + attribute.iceBonus);
            case Element.Rock:
                return damage * (1 + attribute.rockBonus);
            case Element.Thunder:
                return damage * (1 + attribute.thunderBonus);
            case Element.Water:
                return damage * (1 + attribute.waterBonus);
            case Element.Wind:
                return damage * (1 + attribute.windBonus);
        }
    }
}