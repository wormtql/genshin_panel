import { Element } from "../common/element";

interface CommonConfigRatio {
    rate: number
}

interface CommonConfigLevel {
    level: number,
}

interface ConfigTinyMiracle {
    element: Element,
    rate: number,
}

interface ConfigDefenderWill {
    elements: Element[],
}

interface ConfigBlizzardStrayer {
    criticalBonus: number,
}

interface ConfigArchaicPetra {
    element: Element,
    rate: number,
}

interface ConfigPaleFlame {
    level: number,
    rate: number,
}


export default interface Param {
    configTinyMiracle?: ConfigTinyMiracle,
    configBraveHeart?: CommonConfigRatio,
    configInstructor?: CommonConfigRatio,
    configBerserker?: CommonConfigRatio,
    configMartialArtist?: CommonConfigRatio,
    configDefenderWill?: ConfigDefenderWill,
    configCrimsonWitch?: CommonConfigLevel,
    configBlizzardStrayer?: ConfigBlizzardStrayer,
    configBloodstainedChivalry?: CommonConfigRatio,
    configNoblesseOblige?: CommonConfigRatio,
    configHeartOfDepth?: CommonConfigRatio,
    configArchaicPatra?: ConfigArchaicPetra,
    configPaleFlame?: ConfigPaleFlame,
    configRetracingBolide?: CommonConfigRatio,
    configThunderSmoother?: CommonConfigRatio,
    configTenacityOfTheMillelith?: CommonConfigRatio,
    configLavaWalker?: CommonConfigRatio,
    configMaidenBeloved?: CommonConfigRatio,
    configShimenawaReminiscence?: CommonConfigRatio,
    configHuskOfOpulentDreams?: CommonConfigLevel,
}