const expect = require("chai").expect;
const genshin = require("../../dist");

describe("customWeapon", () => {
    it("#1: attack percentage", () => {
        const character = new genshin.Character("keqing", 90, false, 0);
        let args = {
            baseAtk: 500,
            secondary: [
                {
                    name: "attackPercentage",
                    value: 0.2,
                }
            ]
        }
        const weapon = new genshin.Weapon("custom", 90, false, 1, args);
        const attribute = new genshin.AttributeBuilder()
            .character(character)
            .weapon(weapon)
            .build()
        ;

        expect(Math.abs(attribute.attackPercentage - 164.6)).lessThan(0.000001);
    });

    it("#2: elementalMastery", () => {
        const character = new genshin.Character("keqing", 90, false, 0);
        let args = {
            baseAtk: 500,
            secondary: [
                {
                    name: "elementalMastery",
                    value: 100,
                }
            ]
        }
        const weapon = new genshin.Weapon("custom", 90, false, 1, args);
        const attribute = new genshin.AttributeBuilder()
            .character(character)
            .weapon(weapon)
            .build()
        ;

        expect(weapon.baseAtk).eq(500);
        expect(attribute.elementalMastery).eq(100);
    });
})