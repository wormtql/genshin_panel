export declare type WeaponTagType = "attack2" | "critical" | "criticalDamage" | "recharge" | "elementalMastery" | "life2";
export interface Weapon {
    primary: number;
    secondary: {
        [key in WeaponTagType]: number;
    };
}
