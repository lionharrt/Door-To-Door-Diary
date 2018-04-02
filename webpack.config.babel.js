import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack from "webpack"

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "dist")
}

const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin({})

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/app/index.html"),
  filename: "index.html",
  inject: "body"
})

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
process.env.BABEL_ENV = LAUNCH_COMMAND
const isProduction = LAUNCH_COMMAND === "production"

const productionPlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
})

const base = {
  entry: [PATHS.app],
  output: {
    path: PATHS.build,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader:
          "style-loader!css-loader?sourceMap&modules&localIdentName=[name]__[local]__[hash:base64:5]"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "./app"), path.resolve(__dirname, "./node_modules")],
    extensions: [".js", ".jsx"]
  }
}

const developmentConfig = {
  plugins: [HtmlWebpackPluginConfig, HotModuleReplacementPlugin],
  devtool: "cheap-module-inline-source-map",
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    stats: {
      errorDetails: true
    }
  }
}

const productionConfig = {
  devtool: "cheap-module-source-map",
  plugins: [HtmlWebpackPluginConfig, productionPlugin]
}

const usingConfig = Object.assign(
  {},
  base,
  isProduction === true ? productionConfig : developmentConfig
)

export default usingConfig
