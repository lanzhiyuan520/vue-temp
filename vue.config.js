module.exports = {
  //关闭eslint
  lintOnSave: false,

  publicPath : './',

  css : {
    loaderOptions : {
      scss : {
        additionalData : `@import "./src/common/css/common.scss";`
      }
    }
  }
}
