module.exports = {
  outputDir: 'docs',
  filenameHashing: false,
  publicPath: process.env.PUBLIC_PATH,
  chainWebpack: config => {
    config.plugin('html').tap(options => {
      // eslint-disable-next-line no-param-reassign
      options[0].minify = false;
      return options;
    });
  },
};
