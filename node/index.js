var path = require('path');
var moduleEntryPoint = require.resolve('incuna-sass');

var moduleDir = path.dirname(moduleEntryPoint);

function includePaths() {
  return [moduleDir];
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
