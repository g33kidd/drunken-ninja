var adminRoutes     = require('./admin');
var apiRoutes       = require('./api');
var frontendRoutes  = require('./frontend');

module.exports = {
  admin: adminRoutes,
  api: apiRoutes,
  frontend: frontendRoutes,
  apiBaseUri: '/api/v1'
};
