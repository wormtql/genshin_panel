export function getBaseValue (family: number[], level: number, ascend: boolean): number {
    if (!family) {
        throw "family not exist";
    }
    if (level < 1) {
        throw "level < 1";
    }
    if (level === 1) {
        return family[0];
    }

    let temp = [1, 20, 40, 50, 60, 70, 80, 90];
    let index = 0;
    while (index < temp.length && temp[index] < level) {
        index++;
    }

    if (temp[index] === level) {
        return family[index * 2 + (ascend ? 0 : -1)];
    }

    let lowerValue: number = family[(index - 1) * 2];
    let upperValue: number = family[index * 2 - 1];

    return (upperValue - lowerValue) / (temp[index] - temp[index - 1]) * (level - temp[index - 1]) + lowerValue;
}

export function getWeaponSpecial(family: number[], level: number): number {
    if (level === 1) {
        return family[0];
    }

    let temp = [1, 20, 40, 50, 60, 70, 80, 90];
    let index = 0;
    while (index < temp.length && temp[index] < level) {
        index++;
    }

    if (level === temp[index]) {
        return family[index];
    }
    return family[index - 1];
}

export function getCharSpecial(family: number[], level: number, ascend: boolean): number {
    if (level < 20 || (level === 20 && !ascend)) {
        return 0;
    }

    let temp = [20, 40, 50, 60, 70, 80, 90];
    let index = 0;
    while (index < temp.length && temp[index] < level) {
        index++;
    }

    if (temp[index] === level && ascend) {
        return family[index];
    }

    return family[index - 1];
}