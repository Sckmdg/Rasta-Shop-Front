import cssnano from 'cssnano'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../../_config'

const isDevelopment = config.env === 'development';

// ------------------------------------
// Pre-Loaders
// ------------------------------------
export let preLoaders = [{
  test: /\.js$/,
  loader: 'eslint',
  exclude: /node_modules/
}];

export let eslint = {
  configFile: `${config.path_base}/.eslintrc`,
  emitWarning: config.compiler_enable_hmr
};

// ------------------------------------
// Loaders
// ------------------------------------
let sassLoaders = !isDevelopment
  ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
  : 'style-loader!css-loader!postcss-loader!sass-loader';

let cssLoaders = !isDevelopment
  ? ExtractTextPlugin.extract('style-loader', 'css-loader')
  : 'style-loader!css-loader';

export let loaders = [
  // ES-2015
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel',
    compact: false,
    query: {
      cacheDirectory: true,
      plugins: ['transform-runtime'],
      presets: isDevelopment
        ? ['env', 'react', 'stage-0', 'react-hmre']
        : ['env', 'react', 'stage-0']
    }
  },
  // Styles
  {
    test: /\.scss$/,
    include: /app/,
    loader: sassLoaders
  },
  {
    test: /\.css$/,
    include: /node_modules/,
    loader: cssLoaders
  },
  // Fonts
  { test: /\.woff(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]&mimetype=application/font-woff2' },
  { test: /\.[ot]tf(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&mimetype=image/svg+xml' },
  // Images
  { test: /\.(png|jpg|gif)$/, loader: 'file' },
  // Json
  { test: /\.json$/, loader: 'json-loader' }

];

export let postcss = [
  cssnano({
    sourcemap: true,
    autoprefixer: {
      add: true,
      remove: true,
      browsers: ['last 2 versions']
    },
    safe: true,
    discardComments: {
      removeAll: true
    }
  })
];

export let sassLoader = {
  includePaths: `${config.path_client}/styles`
};
