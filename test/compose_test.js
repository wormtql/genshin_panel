const expect = require("chai").expect;
const genshin = require("../dist");

describe("#test1", () => {
    it("mona", () => {
        const mona = new genshin.Character("mona", 90, false, 0);
        const weapon = new genshin.Weapon("xialiriyue", 80, false, 1);
        const attribute = new genshin.AttributeBuilder()
            .character(mona)
            .weapon(weapon)
            .build()
        ;

        expect(attribute.waterBonus).eq(0.264);
    });

    it("乐团", () => {
        const ganyu = new genshin.Character("ganyu", 90, false, 0);
        const weapon = new genshin.Weapon("amosizhigong", 90, false, 1);

        const art1 = new genshin.ArtifactBuilder()
            .setName("wandererTroupe")
            .mainTag("lifeStatic", 1000)
            .position("flower")
            .build()
        ;
        const art2 = new genshin.ArtifactBuilder()
            .setName("wandererTroupe")
            .mainTag("attackStatic", 100)
            .position("feather")
            .build()
        ;
        const art3 = new genshin.ArtifactBuilder()
            .setName("wandererTroupe")
            .mainTag("attackStatic", 100)
            .position("sand")
            .build()
        ;
        const art4 = new genshin.ArtifactBuilder()
            .setName("wandererTroupe")
            .mainTag("attackStatic", 100)
            .position("cup")
            .build()
        ;

        const attribute = new genshin.AttributeBuilder()
            .character(ganyu)
            .weapon(weapon)
            .artifacts([art1, art2, art3, art4])
            .build()
        ;

        expect(attribute.bBonus).eq(0.47);
    })

    it("千岩", () => {
        const c = new genshin.Character("keqing", 90, false, 0);
        const w = new genshin.Weapon("qianyangujian", 90, false, 2, { liyueCount: 2 });
        const attribute = new genshin.AttributeBuilder()
            .character(c)
            .weapon(w)
            .build()
        ;

        expect(attribute.critical).eq(0.13);
    })
});

describe("test berserker effect", () => {
    it("test1", () => {
        let keqing = new genshin.Character("keqing", 90, false, 0);
        let weapon = new genshin.Weapon("wufengjian", 70, false, 5);
        let art1 = new genshin.ArtifactBuilder()
            .setName("berserker")
            .position("flower")
            .build()
        let art2 = new genshin.ArtifactBuilder()
            .setName("berserker")
            .position("feather")
            .build()
        let art3 = new genshin.ArtifactBuilder()
            .setName("berserker")
            .position("sand")
            .build()
        let art4 = new genshin.ArtifactBuilder()
            .setName("berserker")
            .position("cup")
            .build()
        let attribute = new genshin.AttributeBuilder()
            .character(keqing)
            .weapon(weapon)
            .artifacts([art1, art2, art3, art4])
            .artifactsConfig({
                configBerserker: {
                    rate: 0.5,
                }
            })
            .build()
        expect(attribute.critical).eq(0.29);
    })
})