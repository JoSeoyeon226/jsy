const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"/jsy",
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
})
