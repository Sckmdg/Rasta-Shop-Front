import config from '../../_config'

const isDevelopment = config.env === 'development';

const buildEntryPoint = function (entryPoint) {
  let entry = [entryPoint];
  if (isDevelopment) {
    entry.unshift(
      `webpack-dev-server/client?http://${config.server_host}:${config.server_port}`,
      'webpack/hot/dev-server'
    );
  }
  return entry;
};

export const entry = {
  app: buildEntryPoint(`${config.path_client}/main.js`)
};

export const output = {
  filename: `[name].js`,
  path: config.path_dist,
  publicPath: config.compiler_public_path
};

if (!isDevelopment) {
  output.filename = `[name].[hash].js`;
}

export const resolve = {
  root: config.path_client,
  extensions: ['', '.js']
};
