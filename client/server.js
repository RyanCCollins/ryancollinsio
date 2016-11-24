// var hook = require('css-modules-require-hook');
// hook({
//   generateScopedName: '[path]___[name]__[local]___[hash:base64:5]',
//   extensions: ['.scss']
// });
require('babel-core/register');
require('./config/webpack/ignoreAssets');
var app = require('./server/app');
