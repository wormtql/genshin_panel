const expect = require("chai").expect;

const app = require("../dist");

describe("#character-data-test", () => {
    it("getCharacterAttribute keqing-70-0", () => {
        let value = app.getCharacterAttribute("keqing-70-0");
        expect(value).to.eql({
            primary: {
                "attack": 247,
                "life": 10025,
                "defend": 612,
            },
            secondary: {
                "criticalDamage": 0.192,
            }
        })
    });

    it("getCharacterAttribute null", () => {
        let value = app.getCharacterAttribute("asd");
        expect(value).null;
    });
})

describe("#weapon-data-test", () => {
    it("getWeaponAttribute heijian-70-0", () => {
        let value = app.getWeaponAttribute("heijian-70-0");
        expect(value).to.eql({
            primary: {
                "attack": 388,
            },
            secondary: {
                "critical": 0.227,
                "bCritical": 0.227,
            }
        })
    });

    it("getWeaponAttribute null", () => {
        let value = app.getWeaponAttribute("asd");
        expect(value).null;
    });
})