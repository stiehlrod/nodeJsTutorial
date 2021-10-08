const path = require('path');

// https://nodejs.org/api/path.html#path_path_dirname_path
module.exports = path.dirname(require.main.filename);