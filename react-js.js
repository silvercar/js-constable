const merge = require('lodash.merge');

module.exports = merge({},
  require('./base-js'),
  require('./rules/react'));
