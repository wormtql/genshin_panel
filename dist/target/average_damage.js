"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementalDamage = exports.physicalDamage = void 0;
const element_1 = require("../common/element");
// ab: 普攻占总的频率，例如，普攻三下重击一下，ab = 0.75，如果从不重击，则ab = 1
// dBA: 重击相比普攻的倍率
function physicalDamage(ab, dBA) {
    return function (attribute) {
        const attack = attribute.attack1 + attribute.attack2;
        const aCritical = Math.max(attribute.critical, 1);
        const bCritical = Math.max(attribute.bCritical, 1);
        const aDamage = ab * attack * (aCritical * (1 + attribute.criticalDamage) + (1 - aCritical)) * (1 + attribute.aBonus);
        const bDamage = (1 - ab) * attack * dBA * (bCritical * (1 + attribute.criticalDamage) + (1 - bCritical)) * (1 + attribute.bBonus);
        const damage = (aDamage + bDamage) * (1 + attribute.physicalBonus) * (1 + attribute.bonus);
        return damage;
    };
}
exports.physicalDamage = physicalDamage;
function elementalDamage(element, ab, dBA) {
    // const base = physicalDamage(ab, dBA);
    return function (attribute) {
        const attack = attribute.attack1 + attribute.attack2;
        const aCritical = Math.max(attribute.critical, 1);
        const bCritical = Math.max(attribute.bCritical, 1);
        const aDamage = ab * attack * (aCritical * (1 + attribute.criticalDamage) + (1 - aCritical)) * (1 + attribute.aBonus);
        const bDamage = (1 - ab) * attack * dBA * (bCritical * (1 + attribute.criticalDamage) + (1 - bCritical)) * (1 + attribute.bBonus);
        const damage = aDamage + bDamage;
        switch (element) {
            case element_1.Element.Fire:
                return damage * (1 + attribute.fireBonus);
            case element_1.Element.Ice:
                return damage * (1 + attribute.iceBonus);
            case element_1.Element.Rock:
                return damage * (1 + attribute.rockBonus);
            case element_1.Element.Thunder:
                return damage * (1 + attribute.thunderBonus);
            case element_1.Element.Water:
                return damage * (1 + attribute.waterBonus);
            case element_1.Element.Wind:
                return damage * (1 + attribute.windBonus);
        }
    };
}
exports.elementalDamage = elementalDamage;
