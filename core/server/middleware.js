var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var compress        = require('compression');
var logger          = require('morgan');
var routes          = require('./routes');

/*
All of this should be moved to a different folder eventaully when more
middleware is created.
*/

updateActiveTheme = function(req, res, next) {
  // updates the theme based on the settings for each request.
  // It should get the current theme and set HBS views directory to
  // the current theme directory. Same for partials and assets.
  next();
}

// Middleware sets up Routes, Express Middleware, HBS, etc..
setupMiddleware = function setupMiddleware(rootApp, adminApp) {
  rootApp.use(compress());
  rootApp.use(logger('dev'));
  adminApp.use(routes.admin);

  rootApp.enable('trust proxy');
  rootApp.use(bodyParser.json());
  rootApp.use(bodyParser.urlencoded({ extended: true }));
  rootApp.use(methodOverride());

  rootApp.use('/admin', adminApp);
  rootApp.use(routes.apiBaseUri, routes.api);

  rootApp.disable('x-powered-by');
}

module.exports = setupMiddleware;
