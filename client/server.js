require('babel-polyfill');
require('babel-core/register');
require('./config/webpack/ignoreAssets');
const app = require('./server/app'); // eslint-disable-line
