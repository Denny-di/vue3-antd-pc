/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const FileManagerPlugin = require("filemanager-webpack-plugin");
const webpack = require("webpack");
const { version } = require("./package.json");

module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  runtimeCompiler: true,

  chainWebpack: (config) => {
    if (process.env.NODE_ENV == "production") {
      const curTime = new Date().toLocaleDateString().replace(/\//g, "_");
      config.plugin("compress").use(FileManagerPlugin, [
        {
          onEnd: {
            delete: ["./*.zip"],
            archive: [
              {
                source: "./dist",
                destination: `./dist_${version}_${curTime}.zip`,
              },
            ],
          },
        },
      ]);
    }
  },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        "console.log",
      ];
      config.output.filename = `js/[name].[hash].${version}.js`;
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: `pacakge version：${version}_${new Date().toLocaleString()}`, // the banner as string, it will be wrapped in a comment
          // raw: boolean, // if true, banner will not be wrapped in a comment
          // entryOnly: boolean, // if true, the banner will only be added to the entry chunks
          // test: string | RegExp | Array,
          include: /app.*/, //string | RegExp | Array,
          // exclude: string | RegExp | Array,
        })
      );
    }
  },

  // devServer: {
  //   host: "0.0.0.0",
  //   port: "8080",
  //   open: false,
  //   proxy: {
  //     [process.env.VUE_APP_API]: {
  //       target: process.env.VUE_APP_BASEURL,
  //       changeOrigin: true,
  //       // ws: true // proxy websockets
  //     },
  //   },
  // },
};
