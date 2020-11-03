const expect = require("chai").expect;
const app = require("../dist");

describe("#composeBasic", () => {
    it("compose keqing heijian", () => {
        let attribute = app.composeBasic("keqing-70-0", "heijian-70-0");
        expect(attribute).property("life1", 10025);
        expect(attribute).property("attack1", 635);
        expect(attribute).property("defend1", 612);
        expect(attribute).property("critical", 0.277);
        
        // expect(attribute).eql({
        //     "life1": 10025,
        //     "attack1": 635,
        //     "defend1": 612,
        //     "critical": 0.277,
        // })
    })

    it("compose keqing limingshenjian", () => {
        let attribute = app.composeBasic("keqing-70-0", "limingshenjian-60-0");
        expect(attribute).property("life1", 10025);
        expect(attribute).property("attack1", 510);
        expect(attribute).property("defend1", 612);
        expect(attribute).property("criticalDamage", 1.037);
    })
})

describe("#compose", () => {
    it("artifacts test 1", () => {
        let art = new app.Artifact("flower", "berserker");
        art.setPrimaryTag("life1", 645);
        art.addSecondaryTag("criticalDamage", 0.044);
        art.addSecondaryTag("elementalMastery", 15);
        art.addSecondaryTag("defend2", 0.053);

        let attribute = app.compose("keqing-70-0", "heijian-70-0", [art]);
        expect(attribute).property("life2", 645);
        expect(attribute).property("defend2", 32.436);
        expect(attribute).property("elementalMastery", 15);
        expect(attribute).property("criticalDamage", 0.736);
        expect(attribute).property("attack1", 635);
        expect(attribute).property("critical", 0.277);
        // expect(attribute).eql({
        //     life2: 645,
        //     defend2: 32.436,
        //     elementalMastery: 15,
        //     criticalDamage: 0.736,
        //     attack1: 635,
        //     critical: 0.277,
        // });
    });

    it ("artifacts berserker set test", () => {
        let art = new app.Artifact("flower", "berserker");
        art.setPrimaryTag("life1", 645);
        art.addSecondaryTag("criticalDamage", 0.044);
        art.addSecondaryTag("elementalMastery", 15);
        art.addSecondaryTag("defend2", 0.053);

        let art2 = new app.Artifact("feather", "berserker");
        art2.setPrimaryTag("attack1", 232);
        art2.addSecondaryTag("defend1", 13);
        art2.addSecondaryTag("attack2", 0.042);
        art2.addSecondaryTag("criticalDamage", 0.099);
        art2.addSecondaryTag("life1", 406);

        let attribute = app.compose("keqing-70-0", "heijian-70-0", [art, art2]);
        expect(attribute).property("life2", 1051);
        expect(attribute).property("bCritical", 0.397);
        expect(attribute).property("criticalDamage", 0.835);
    });

    it("artifacts test 2", () => {
        let art = new app.Artifact("flower", "thunderingFury");
        art.setPrimaryTag("life1", 2291);
        art.addSecondaryTag("critical", 0.031);
        art.addSecondaryTag("defend2", 0.047);
        art.addSecondaryTag("life2", 0.037);
        art.addSecondaryTag("elementalMastery", 19);

        let art2 = new app.Artifact("feather", "berserker");
        art2.setPrimaryTag("attack1", 232);
        art2.addSecondaryTag("defend1", 13);
        art2.addSecondaryTag("attack2", 0.042);
        art2.addSecondaryTag("criticalDamage", 0.099);
        art2.addSecondaryTag("life1", 406);

        let art3 = new app.Artifact("sand", "thunderingFury");
        art3.setPrimaryTag("attack2", 0.348);
        art3.addSecondaryTag("defend1", 15);
        art3.addSecondaryTag("recharge", 0.145);
        art3.addSecondaryTag("life2", 0.042);
        art3.addSecondaryTag("critical", 0.025);

        let art4 = new app.Artifact("cup", "resolutionOfSojourner");
        art4.setPrimaryTag("thunderBonus", 0.348);
        art4.addSecondaryTag("defend1", 46);
        art4.addSecondaryTag("attack1", 11);
        art4.addSecondaryTag("recharge", 0.052);
        art4.addSecondaryTag("elementalMastery", 32);

        let art5 = new app.Artifact("head", "berserker");
        art5.setPrimaryTag("critical", 0.232);
        art5.addSecondaryTag("attack1", 30);
        art5.addSecondaryTag("defend1", 31);
        art5.addSecondaryTag("criticalDamage", 0.056);
        art5.addSecondaryTag("life1", 215);

        let attribute = app.compose("keqing-70-0", "heijian-70-0", [art, art2, art3, art4, art5]);
        // expect(attribute).eql({});
        expect(attribute).property("attack1", 635);
        expect(attribute).property("attack2", 520.65);
        expect(attribute).property("critical", 0.685);
        expect(attribute).property("criticalDamage", 0.847);
        expect(attribute).property("defend1", 612);
        expect(attribute).property("defend2", 133.764);
        expect(attribute).property("elementalMastery", 51);
        expect(attribute).property("thunderBonus", 0.498);
        expect(attribute).property("recharge", 1.197);
    })
})