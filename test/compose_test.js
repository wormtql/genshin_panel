// const expect = require("chai").expect;
// const app = require("../dist");

// describe("#composeBasic", () => {
//     it("compose keqing heijian", () => {
//         let attribute = app.compose("keqing-70-0", "heijian-70-0");
//         expect(attribute).property("life1", 10025);
//         expect(attribute).property("attack1", 635);
//         expect(attribute).property("defend1", 612);
//         expect(attribute).property("critical", 0.277);
        
//         // expect(attribute).eql({
//         //     "life1": 10025,
//         //     "attack1": 635,
//         //     "defend1": 612,
//         //     "critical": 0.277,
//         // })
//     })

//     it("compose keqing limingshenjian", () => {
//         let attribute = app.compose("keqing-70-0", "limingshenjian-60-0");
//         expect(attribute).property("life1", 10025);
//         expect(attribute).property("attack1", 510);
//         expect(attribute).property("defend1", 612);
//         expect(attribute).property("criticalDamage", 1.037);
//     })
// })

// describe("#compose", () => {
//     it("artifacts test 1", () => {
//         let art = {
//             position: "flower",
//             setName: "berserker",
//             primary: {
//                 "life1": 645
//             },
//             secondary: {
//                 "criticalDamage": 0.044,
//                 "elementalMastery": 15,
//                 "defend2": 0.053,
//             }
//         };

//         let attribute = app.compose("keqing-70-0", "heijian-70-0", [art]);
//         expect(attribute).property("life2", 645);
//         expect(attribute).property("defend3", 32.436);
//         expect(attribute).property("elementalMastery", 15);
//         expect(attribute).property("criticalDamage", 0.736);
//         expect(attribute).property("attack1", 635);
//         expect(attribute).property("critical", 0.277);
//         // expect(attribute).eql({
//         //     life2: 645,
//         //     defend2: 32.436,
//         //     elementalMastery: 15,
//         //     criticalDamage: 0.736,
//         //     attack1: 635,
//         //     critical: 0.277,
//         // });
//     });

//     it ("artifacts berserker set test", () => {
//         let art = {
//             position: "flower",
//             setName: "berserker",
//             primary: {
//                 "life1": 645
//             },
//             secondary: {
//                 "criticalDamage": 0.044,
//                 "elementalMastery": 15,
//                 "defend2": 0.053,
//             }
//         };

//         let art2 = {
//             position: "feather",
//             setName: "berserker",
//             primary: {
//                 "attack1": 232,
//             },
//             secondary: {
//                 "defend1": 13,
//                 "attack2": 0.042,
//                 "criticalDamage": 0.099,
//                 "life1": 406,
//             }
//         }

//         let attribute = app.compose("keqing-70-0", "heijian-70-0", [art, art2]);
//         expect(attribute).property("life2", 1051);
//         expect(attribute).property("bCritical", 0.397);
//         expect(attribute).property("criticalDamage", 0.835);
//     });

//     it("artifacts test 2", () => {
//         let art = {
//             position: "flower",
//             setName: "thunderingFury",
//             primary: {
//                 "life1": 2291
//             },
//             secondary: {
//                 "critical": 0.031,
//                 "life2": 0.037,
//                 "defend2": 0.047,
//                 "elementalMastery": 19
//             }
//         };

//         let art2 = {
//             position: "feather",
//             setName: "berserker",
//             primary: {
//                 "attack1": 232,
//             },
//             secondary: {
//                 "defend1": 13,
//                 "attack2": 0.042,
//                 "criticalDamage": 0.099,
//                 "life1": 406,
//             }
//         };

//         let art3 = {
//             position: "sand",
//             setName: "thunderingFury",
//             primary: {
//                 "attack2": 0.348,
//             },
//             secondary: {
//                 "defend1": 15,
//                 "recharge": 0.145,
//                 "life2": 0.042,
//                 "critical": 0.025
//             }
//         }

//         let art4 = {
//             position: "cup",
//             setName: "resolutionOfSojourner",
//             primary: {
//                 "thunderBonus": 0.348,
//             },
//             secondary: {
//                 "defend1": 46,
//                 "attack1": 11,
//                 "recharge": 0.052,
//                 "elementalMastery": 32,
//             }
//         }

//         let art5 = {
//             position: "head",
//             setName: "berserker",
//             primary: {
//                 "critical": 0.232,
//             },
//             secondary: {
//                 "attack1": 30,
//                 "defend1": 31,
//                 "criticalDamage": 0.056,
//                 "life1": 215
//             }
//         };

//         let attribute = app.compose("keqing-70-0", "heijian-70-0", [art, art2, art3, art4, art5]);
//         // expect(attribute).eql({});
//         expect(attribute).property("attack1", 635);
//         expect(attribute).property("attack2", 273);
//         // expect(attribute).property("attack3", 247.65)
//         expect(attribute).property("critical", 0.685);
//         expect(attribute).property("criticalDamage", 0.847);
//         expect(attribute).property("defend1", 612);
//         expect(attribute).property("defend2", 105);
//         expect(attribute).property("elementalMastery", 51);
//         expect(attribute).property("thunderBonus", 0.498);
//         expect(attribute).property("recharge", 1.197);
//     })

//     it("custom base attribute", () => {
//         let base = Object.assign(app.newAttribute(), {
//             "attack1": 123
//         });
//         // let base = app.newAttribute();

//         let art = {
//             position: "flower",
//             setName: "berserker",
//             primary: {
//                 "attack1": 123,
//             },
//             secondary: {

//             }
//         };

//         app.applyArtifacts(base, [art]);

//         expect(base).property("attack1", 123);
//         expect(base).property("attack2", 123);
//     })

//     it("compose interface test 1", () => {
//         let art = {
//             position: "flower",
//             setName: "berserker",
//             primary: {
//                 "life1": 645,
//             },
//             secondary: {
//                 "criticalDamage": 0.044,
//                 "elementalMastery": 15,
//                 "defend2": 0.053
//             }
//         };

//         let attribute = app.compose("keqing-70-0", "heijian-70-0", [art]);
//         expect(attribute).property("life2", 645);
//         expect(attribute).property("defend3", 32.436);
//         expect(attribute).property("elementalMastery", 15);
//         expect(attribute).property("criticalDamage", 0.736);
//         expect(attribute).property("attack1", 635);
//         expect(attribute).property("critical", 0.277);
//     })

//     it("compose custom weapon", () => {
//         let weapon = {
//             primary: {
//                 "attack": 100,
//             },
//             secondary: {
//                 "elementalMastery": 100,
//             }
//         };

//         let attribute = app.compose("keqing-70-0", weapon);
//         expect(attribute).property("attack2", 0);
//         expect(attribute).property("attack1", 347);
//     })

//     it("critical test", () => {
//         let attribute = app.compose("diluke-70-0", "jilidajian-70-0");

//         expect(attribute).property("bCritical", 0.194);
//     })
// })

// // describe("#adverturer test", () => {
// //     it("set2 test", () => {

// //     })
// // })