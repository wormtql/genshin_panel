export declare type PrimaryTagName = "attack" | "defend" | "life";
export declare type SecondaryTagName = "cureEffect" | "life1" | "life2" | "attack1" | "attack2" | "defend1" | "defend2" | "critical" | "criticalDamage" | "elementalMastery" | "recharge" | "thunderBonus" | "fireBonus" | "waterBonus" | "iceBonus" | "windBonus" | "rockBonus" | "physicalBonus";
export interface WeaponInterface {
    primary: {
        [key in PrimaryTagName]: number;
    };
    secondary: {
        [key in SecondaryTagName]: number;
    };
}
export interface CharacterInterface {
    primary: {
        [key in PrimaryTagName]: number;
    };
    secondary: {
        [key in SecondaryTagName]: number;
    };
}
export interface BonusItemInterface {
    primary: {
        [key in PrimaryTagName]: number;
    };
    secondary: {
        [key in SecondaryTagName]: number;
    };
}
