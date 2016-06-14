// This index module is returned by default when this package is required

// Node module imports
var path = require('path');

// Function returns absolute system path to location that module is installed.
// This is useful for referencing the files within this package in grunt tasks
// Uses a technique copied from node-bourbon
function includePaths() {
    var moduleEntryPoint = require.resolve('incuna-sass');
    var entrypointDir = path.dirname(moduleEntryPoint);
    // Module resolves to the main entry point - e.g. node/index.js, so we go up a 
    //  level to get the main module root path
    var moduleDir = path.join(entrypointDir, '../');
    return [moduleDir];
}

module.exports = {
    // run modulePath() function immediately and return result as exported value
    includePaths: includePaths()
};
