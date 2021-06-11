const expect = require("chai").expect;
const genshin = require("../../dist");

describe("幽夜华尔兹", () => {
    it("test weapon effect 1", () => {
        const character = new genshin.Character("feixieer", 90, false, 0);
        const weapon = new genshin.Weapon("youyehuaerzi", 90, false, 1, { rate1: 0.9 });
        const attribute = new genshin.AttributeBuilder()
            .character(character)
            .weapon(weapon)
            .build()
        ;

        expect(attribute.eBonus - 0.18).lessThan(0.00001);
    })
})