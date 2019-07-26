const path = require('path');

module.exports = function ppout(filepath, pretty) {
  const module = require(path.join(process.cwd(), filepath));
  var args = [module];
  if (pretty) {
    args = args.concat([null, 2]);
  }
  return JSON.stringify.apply(null, args);
}
