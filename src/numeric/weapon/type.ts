export type WeaponTagType
    // = "attack1"         // 固定攻击力
    = "attack2"         // %攻击力
    | "critical"
    | "criticalDamage"
    | "recharge"
    | "elementalMastery"
    | "life2"               // %生命值

export interface Weapon {
    primary: number,
    secondary: {
        [key in WeaponTagType]: number
    }
}