const path = require("path");

// module.exports = [
//     "source-map"
// ].map(devtool => ({
//     mode: "development",
//     entry: "./src/numerics/character/index.ts",
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "genshin-panel.js",
//         library: "genshinPanel",
//         libraryTarget: "umd",
//     },
//     devtool,
//     optimization: {
//         runtimeChunk: true,
//     }
// }))

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: "genshinPanel",
        libraryTarget: "umd",
        globalObject: "this",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules|(\.d\.ts$)/,
                // exclude: /node_modules/,
            },
            {
                test: /\.d\.ts$/,
                use: "ignore-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    // optimization: {
    //     runtimeChunk: true,
    // }
}