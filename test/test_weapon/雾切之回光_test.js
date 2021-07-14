const expect = require("chai").expect;
const genshin = require("../../dist");

describe("雾切之回光", () => {
    it("test weapon effect 1", () => {
        const character = new genshin.Character("keqing", 90, false, 0);
        const weapon = new genshin.Weapon("wuqiezhihuiguang", 90, false, 1, { level: 1 });
        const attribute = new genshin.AttributeBuilder()
            .character(character)
            .weapon(weapon)
            .build()
        ;
        
        expect(attribute.thunderBonus).eq(0.2);
    });

    it("test weapon effect 2", () => {
        const character = new genshin.Character("keqing", 90, false, 0);
        const weapon = new genshin.Weapon("wuqiezhihuiguang", 90, false, 2, { level: 2 });
        const attribute = new genshin.AttributeBuilder()
            .character(character)
            .weapon(weapon)
            .build()
        ;
        
        expect(attribute.thunderBonus).eq(0.35);
    });
})