const path = require("path");

module.exports = {
    entry: path.resolve("src", "index.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: {
            type: "umd",
        },
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: [path.resolve("src")],
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(__dirname, "./tsconfig.dist.json"),
                    projectReferences: true,
                },
            },
        ],
    },
    externals: [
        {
            react: {
                commonjs: "react",
                commonjs2: "react",
                amd: "React",
                root: "React",
            },
        },
        {
            "react-dom": {
                commonjs: "react-dom",
                commonjs2: "react-dom",
                amd: "ReactDOM",
                root: "ReactDOM",
            },
        },
    ],
};
