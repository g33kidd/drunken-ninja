var adminRoutes     = require('./admin');
var apiRoutes       = require('./api');

module.exports = {
  admin: adminRoutes,
  api: apiRoutes,
  apiBaseUri: '/api/v1'
};
