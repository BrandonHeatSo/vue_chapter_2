const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // カンマ追加後にこちらを追加して下さい
  lintOnSave: false
  // こちらを追加して下さい
})
