// const expect = require("chai").expect;

// const app = require("../dist");

// describe("#character-data-test", () => {
//     it("test1", () => {
//         let value = app("keqing");
//         console.log(value);
//     });

//     it("getCharacterAttribute null", () => {
//         let value = app.getCharacterAttribute("asd");
//         expect(value).null;
//     });
// })

// describe("#weapon-data-test", () => {
//     it("getWeaponAttribute heijian-70-0", () => {
//         let value = app.getWeaponAttribute("heijian-70-0");
//         expect(value).to.eql({
//             primary: {
//                 "attack": 388,
//             },
//             secondary: {
//                 "critical": 0.227,
//             }
//         })
//     });

//     it("getWeaponAttribute null", () => {
//         let value = app.getWeaponAttribute("asd");
//         expect(value).null;
//     });
// })

// describe("#artifact-info-test", () => {
//     it("test1", () => {
//         let value = app.getArtifactInfo("战狂");

//         expect(value).eql({
//             chs: "战狂",
//             min: 2,
//             max: 4,
//             set2: "暴击率提高12%",
//             set4: "生命值低于70%时，暴击率额外提高24%",
//         });
//     })

//     it("test2", () => {
//         let value = app.getArtifactInfo("berserker");

//         expect(value).eql({
//             chs: "战狂",
//             min: 2,
//             max: 4,
//             set2: "暴击率提高12%",
//             set4: "生命值低于70%时，暴击率额外提高24%",
//         });
//     })
// })