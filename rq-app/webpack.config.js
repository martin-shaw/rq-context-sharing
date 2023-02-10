const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appPath = path.resolve("./src");

module.exports = {
    context: appPath,
    entry: {
        main: {
            import: ["./index.tsx"],
        },
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        publicPath: "/",
        clean: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(__dirname, "./tsconfig.json"),
                    projectReferences: true,
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("src", "index.html"),
        }),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
};
