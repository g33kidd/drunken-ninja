var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var compress        = require('compression');
var logger          = require('morgan');
var routes          = require('./routes');
var hbs             = require('express-handlebars');
var path            = require('path');

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

accessControl = function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
}

// Middleware sets up Routes, Express Middleware, HBS, etc..
setupMiddleware = function setupMiddleware(rootApp, adminApp) {
  var defaulthbs = {
    extname: '.hbs',
    layout: false
  };

  // Don't need adminHbs until build system is setup for building ember or angular files,
  // depending on which one I go with.
  /*var adminHbs = hbs.create(defaulthbs);*/

  var siteHbs = hbs.create(defaulthbs);

  rootApp.use(compress(1));
  rootApp.use(logger('dev'));

  adminApp.use(routes.admin);

  rootApp.enable('trust proxy');
  rootApp.use(bodyParser.json());
  rootApp.use(bodyParser.urlencoded({ extended: true }));
  rootApp.use(methodOverride());

  rootApp.use(accessControl);
  rootApp.use(updateActiveTheme);

  // This is only for testing, this should be moved to updateActiveTheme
  rootApp.engine('handlebars', siteHbs.engine);
  rootApp.set('view engine', '.hbs');
  rootApp.set('views', __dirname + '/views/');

  // All The Routes
  // TODO: Build middleware for extending routes.
  rootApp.use(routes.frontend);
  rootApp.use('/admin', adminApp);
  rootApp.use(routes.apiBaseUri, routes.api);

  rootApp.disable('x-powered-by');
}

module.exports = setupMiddleware;
