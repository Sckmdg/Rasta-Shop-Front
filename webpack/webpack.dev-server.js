import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';
import config from '../_config';

var compiler = webpack(webpackConfig);

var server = new WebpackDevServer(compiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  inline: true,
  progress: true,
  stats: {
    colors: true,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 300
  }
});
server.listen(config.server_port, config.server_host, () => {
  console.log(
    `Server is now running at ${config.server_host}:${config.server_port}`
  );
});
