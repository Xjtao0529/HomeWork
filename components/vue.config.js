const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    open: true,
    port: 8080,
    host: "localhost",
    proxy: {
      [process.env.VUE_APP_API]: {
        target: process.env.VUE_API_DEV_TARGET,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_API]: "",
        },
      },
    },
  },
});
