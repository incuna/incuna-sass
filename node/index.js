var path = require('path');
var moduleEntryPoint = require.resolve('incuna-sass');

var moduleDir = path.dirname(moduleEntryPoint);

function includePaths() {
  return [moduleDir];
}

module.exports = {

  includePaths: includePaths()

};
