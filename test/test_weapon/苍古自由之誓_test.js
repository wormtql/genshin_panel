const expect = require("chai").expect;
const genshin = require("../../dist");

describe("苍古自由之誓", () => {
    it("test weapon effect 1", () => {
        const character = new genshin.Character("feixieer", 90, false, 0);
        const weapon = new genshin.Weapon("苍古自由之誓", 90, false, 1, { rate: 1 });
        const attribute = new genshin.AttributeBuilder()
            .character(character)
            .weapon(weapon)
            .build()
        ;
        
       expect(Math.abs(attribute.attackPercentage - 374.88)).lessThan(0.00001);
    })
})