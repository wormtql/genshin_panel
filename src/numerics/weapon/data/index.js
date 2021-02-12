let nameMap = {};
function nameHelper(d) {
    if (!d) {
        return;
    }
    for (let name of d.alt || []) {
        nameMap[name] = d;
    }
}

function needImport(path) {
    let count = 0;
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "/" || path[i] === "\\") {
            count++;
        }
    }

    return count >= 2;
}

function importAll(r) {
    for (let key of r.keys()) {
        if (needImport(key)) {
            nameHelper(r(key).default);
        }
    }
}

importAll(require.context("./", true, /\.ts$/));

export default function getWeaponData (name) {
    let item = nameMap[name];
    if (!item) {
        throw `weapon ${name} not found`;
    }

    return item;
}