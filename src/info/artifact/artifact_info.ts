

const _artifactInfo = {
    "adventurer": {
        chs: "冒险家",
        min: 1,
        max: 3,
        set2: "生命值上限提升1000点",
        set4: "开启各类宝箱后5秒内，持续恢复30%生命值",
    },
    "luckyDog": {
        chs: "幸运儿",
        min: 1,
        max: 3,
        set2: "防御力提高100点",
        set4: "拾取摩拉时，恢复300点生命值",
    },
    "travelingDoctor": {
        chs: "游医",
        min: 1,
        max: 3,
        set2: "角色受到的治疗效果提高20%",
        set4: "施放元素爆发时，恢复20%生命值",
    },
    "berserker": {
        chs: "战狂",
        min: 2,
        max: 4,
        set2: "暴击率提高12%",
        set4: "生命值低于70%时，暴击率额外提高24%",
    },
    "scholar": {
        chs: "学士",
        min: 2,
        max: 4,
        set2: "元素充能效率提高20%",
        set4: "获得元素能量时，队伍中所有弓箭和法器角色额外恢复3点元素能量。该效果每3秒只能触发一次",
    },
    "prayersForDestiny": {
        chs: "祭水之人",
        min: 3,
        max: 4,
        set1: "受到的水元素附着效果的持续时间减少40%",
    },
    "resolutionOfSojourner": {
        chs: "行者之心",
        min: 3,
        max: 4,
        set2: "攻击力提高18%",
        set4: "重击的暴击率提高30%",
    },
    "prayersForWisdom": {
        chs: "祭雷之人",
        min: 3,
        max: 4,
        set1: "受到的雷元素附着效果的持续时间减少40%",
    },
    "tinyMiracle": {
        chs: "奇迹",
        min: 3,
        max: 4,
        set2: "所有元素抗性提高20%",
        set4: "受到某个元素类型的伤害后，相应的抗性提升30%，持续10秒。该效果每10秒只能触发一次",
    },
    "instructor": {
        chs: "教官",
        min: 3,
        max: 4,
        set2: "元素精通提高80点",
        set4: "触发元素反应后。队伍中所有角色元素精通提高120点，持续8秒",
    },
    "exile": {
        chs: "流放者",
        min: 3,
        max: 4,
        set2: "元素充能效率提高20%",
        set4: "施放元素爆发后，每2秒为队伍中所有角色（不包括自己）恢复2点元素能量。该效果持续6秒，无法叠加",
    },
    "gambler": {
        chs: "赌徒",
        min: 3,
        max: 4,
        set2: "元素战技造成的伤害提升20%",
        set4: "击败敌人时，有100%概率清除元素战技的冷却时间。该效果每15秒至多触发一次",
    },
    "prayersToSpringtime": {
        chs: "祭冰之人",
        min: 3,
        max: 4,
        set1: "受到的冰元素附着效果的持续时间减少40%",
    },
    "braveHeart": {
        chs: "勇士之心",
        min: 3,
        max: 4,
        set2: "攻击力提高18%",
        set4: "对生命值高于50%的敌人，造成的伤害增加30%",
    },
    "martialArtist": {
        chs: "武人",
        min: 3,
        max: 4,
        set2: "普通攻击与重击造成的伤害提高15%",
        set4: "施放元素战技后的8秒内，普通攻击和重击造成的伤害提升25%",
    },
    "prayersForIllumination": {
        chs: "祭火之人",
        min: 3,
        max: 4,
        set1: "受到的火元素附着效果的持续时间减少40%",
    },
    "defenderWill": {
        chs: "守护之心",
        min: 3,
        max: 4,
        set2: "防御力提高30%",
        set4: "队伍里每有不同一种元素类型的自己的角色，自身获得30%相应的元素抗性",
    },
    "wandererTroupe": {
        chs: "流浪大地的乐团",
        min: 4,
        max: 5,
        set2: "元素精通提高80点",
        set4: "装备该圣遗物套装的角色为法器、弓箭角色时，角色重击造成的伤害提高35%",
    },
    "thunderSmoother": {
        chs: "平息雷鸣的尊者",
        min: 4,
        max: 5,
        set2: "雷元素抗性提高40%",
        set4: "对处于雷元素影响下的敌人造成的伤害提升35%",
    },
    "archaicPetra": {
        chs: "悠古的磐岩",
        min: 4,
        max: 5,
        set2: "获得15%岩元素伤害加成",
        set4: "获得结晶反应形成的晶片时，队伍中所有角色获得35%对应元素伤害加成，持续10秒。同时只能通过该效果获得一种元素伤害加成",
    },
    "gladiatorFinale": {
        chs: "角斗士的终幕礼",
        min: 4,
        max: 5,
        set2: "攻击力提高18%",
        set4: "装备该圣遗物套装的角色为单手剑、双手剑、长柄武器角色时，角色普通攻击造成的伤害提高35%",
    },
    "retracingBolide": {
        chs: "逆飞的流星",
        min: 4,
        max: 5,
        set2: "护盾强效提高35%",
        set4: "处于护盾庇护下时，额外获得40%普通攻击和重击伤害加成",
    },
    "thunderingFury": {
        chs: "如雷的盛怒",
        min: 4,
        max: 5,
        set2: "获得15%雷元素伤害加成",
        set4: "超载、感电、超导反应造成的伤害提升40%。触发这些元素反应时，元素战技冷却时间减少1秒。该效果每0.8秒最多触发一次",
    },
    "lavaWalker": {
        chs: "渡过烈火的贤人",
        min: 4,
        max: 5,
        set2: "火元素抗性提高40%",
        set4: "对处于火元素影响下的敌人造成的伤害提升35%",
    },
    "maidenBeloved": {
        chs: "被怜爱的少女",
        min: 4,
        max: 5,
        set2: "角色造成的治疗效果提升15%",
        set4: "施放元素战技或元素爆发后的10秒内，队伍中所有角色受治疗效果加成提高20%",
    },
    "bloodstainedChivalry": {
        chs: "染血的骑士道",
        min: 4,
        max: 5,
        set2: "造成的物理伤害提高25%",
        set4: "击败敌人后的10秒内，施放重击时不消耗体力，且造成的伤害提升50%",
    },
    "crimsonWitch": {
        chs: "炽烈的炎之魔女",
        min: 4,
        max: 5,
        set2: "获得15%火元素伤害加成",
        set4: "超载、燃烧反应造成的伤害提升40%，蒸发、融化反应的加成系数提高15%。施放元素战技后的10秒内，二件套的效果提高50%，该效果最多叠加3次",
    },
    "noblesseOblige": {
        chs: "昔日宗室之仪",
        min: 4,
        max: 5,
        set2: "元素爆发造成的伤害提升20％",
        set4: "施放元素爆发后，队伍中所有角色攻击力提升20％，持续12秒。该效果不可叠加",
    },
    "viridescentVenerer": {
        chs: "翠绿之影",
        min: 4,
        max: 5,
        set2: "获得15%风元素伤害加成",
        set4: "扩散反应造成的伤害提升60%，根据扩散的元素类型，降低受到影响的敌人40%的对应元素抗性，持续10秒",
    }
}

let _list = Object.keys(_artifactInfo);
const _listChs = _list.map(item => _artifactInfo[item].chs)

for (let key in _artifactInfo) {
    let chs: string = _artifactInfo[key].chs;
    Object.defineProperty(_artifactInfo, chs, {
        get: function() {
            return _artifactInfo[key];
        }
    });
}


export function getArtifactList() {
    return _list;
}

export function getArtifactListChs() {
    return _listChs;
}

export function getArtifactInfo(name: string) {
    if (typeof _artifactInfo[name] !== "undefined") {
        return _artifactInfo[name];
    }

    return _artifactInfo;
}