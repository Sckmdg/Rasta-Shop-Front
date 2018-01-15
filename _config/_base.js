import path from 'path';

const nodeEnv = process.env.NODE_ENV;
const env = process.env.APP_ENV;

const isDevelopment = env === 'development';

let pathBase = path.resolve(__dirname, '../');

let config = {
  env: env,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: pathBase,
  path_dist: pathBase + '/dist',
  path_client: pathBase + '/app',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host: 'localhost',
  server_port: process.env.PORT || 5085,
  webpack_port: process.env.PORT || 5086,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_devtool: isDevelopment ? 'eval-source-map' : null,
  compiler_enable_hmr: false,
  compiler_public_path: '',

  // ------------------------------------
  // Environment
  // ------------------------------------
  globals: {
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    },
    APP_ENV: JSON.stringify(env),
    __DEV__: isDevelopment,
    __PROD__: !isDevelopment,
    __DEBUG__: isDevelopment,
    __BASENAME__: JSON.stringify(process.env.BASENAME || '')
  }
};

export default config;
