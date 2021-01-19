

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
      args[0].title = '日出之美';	// Replace your title here
      return args;
    });
  },
  "transpileDependencies": [
    "vuetify"
  ],
  devServer:{
    proxy:{
      '/data':{
         target:'https://www.twtainan.net/data',
         changeOrigin:true,
         ws:true,
         pathRewrite:{'^/data':'/'}
      },
     /*'/api':{
        target:"https://www.aspnetcore.com/api",
        changeOrigin:true,
        ws:true,
        pathRewrite:{'^/api':'/'}
      }*/
    }
  }
}