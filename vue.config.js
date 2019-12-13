const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        views: "@/views",
        network: "@/network"
      }
    }
  },

  devServer: {
      open: true
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/vars.less')]
    }
  }
};
