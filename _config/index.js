import base from './_base'

const isDevelopment = base.env === 'development';
const fileName = isDevelopment ? 'development' : 'production';

let overrides = require(`./_${fileName}`);

export default Object.assign({}, base, overrides)
