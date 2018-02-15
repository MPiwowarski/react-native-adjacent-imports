const path = require('path');

module.exports = {
  getProjectRoots() {
    return [
      // root of the (rn) project
      __dirname,

      // getting access to `shared` 
      path.join(__dirname, "../shared"),

      // finally the root proj node_modules for access to
      // shared dependencies
      path.join(__dirname, "..", "..", "node_modules"),
    ];
  }
};

