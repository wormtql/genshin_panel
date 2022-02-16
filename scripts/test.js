const genshin = require("../dist");

let character = new genshin.Character("bachongshenzi", 90, false, 0);
let weapon = new genshin.Weapon("shenlezhizhenyi", 90, false, 1, { rate: .5 });

let art1 = new genshin.ArtifactBuilder()
    .setName("emblemOfSeveredFate")
    .position("flower")
    .mainTag("lifeStatic", 4780)
    .tag("critical", 0.066)
    .tag("criticalDamage", 0.198)
    // .tag("criticalDamage", 0.187)
    // .tag("attackPercentage", 0.093)
    .build()
;

let art2 = new genshin.ArtifactBuilder()
    .setName("emblemOfSeveredFate")
    .position("feather")
    .mainTag("attackStatic", 311)
    .tag("critical", 0.066)
    .tag("attackPercentage", 0.109)
    .tag("criticalDamage", 0.066)
    // .tag("critical", 0.031)
    .build()
;

let art3 = new genshin.ArtifactBuilder()
    .setName("emblemOfSeveredFate")
    .position("sand")
    .mainTag("recharge", 0.518)
    // .tag("attackStatic", 16)
    .tag("critical", 0.066)
    .tag("criticalDamage", 0.132)
    // .tag("recharge", 0.091)
    .build()
;

let art4 = new genshin.ArtifactBuilder()
    .setName("emblemOfSeveredFate")
    .position("cup")
    .mainTag("attackPercentage", 0.466)
    .tag("critical", 0.066)
    // .tag("attackStatic", 27)
    .tag("criticalDamage", 0.132)
    // .tag("attackPercentage", 0.14)
    .build()
;

let art5 = new genshin.ArtifactBuilder()
    .setName("emblemOfSeveredFate")
    .position("head")
    .mainTag("critical", 0.311)
    .tag("criticalDamage", 0.198)
    // .tag("lifePercentage", 0.099)
    // .tag("defendStatic", 23)
    // .tag("attackPercentage", 0.099)
    .build()
;

let attribute = new genshin.AttributeBuilder()
    .character(character).weapon(weapon)
    .artifact(art1)
    .artifact(art2)
    .artifact(art3)
    .artifact(art4)
    .artifact(art5)
    .build();

console.log(attribute);
console.log(attribute.attack());
// console.log(attribute.life());
// console.log(attribute.defend());