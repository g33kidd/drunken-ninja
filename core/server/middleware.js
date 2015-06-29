var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var logger          = require('morgan');
var routes          = require('./routes');

/*
All of this should be moved to a different folder eventaully when more
middleware is created.
*/

// Middleware sets up Routes, Express Middleware, HBS, etc..
setupMiddleware = function setupMiddleware(rootApp, adminApp) {

  rootApp.use(logger('dev'));

  adminApp.use(routes.admin);

  rootApp.enable('trust proxy');
  rootApp.use(bodyParser.json());
  rootApp.use(bodyParser.urlencoded({ extended: true }));

  rootApp.use('/admin', adminApp);
  rootApp.use(routes.apiBaseUri, routes.api);

  rootApp.set('x-powered-by', 'Oovre beta-0.0.1');
}

module.exports = setupMiddleware;
