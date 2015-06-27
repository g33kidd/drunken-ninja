var http        = require('http');
var express     = require('express');
var bodyParser  = require('body-parser');
var routes      = require('./routes');
var path        = require('path');
var mongoose    = require('mongoose');
var errors      = require('./errors');
var logger      = require('morgan');

function App(options) {
  this.host = '127.0.0.1';
  this.port = 3000;
  this.httpServer = null;

  this.rootPath = options.rootPath;

};

App.prototype.start = function(rootApp) {
  var self = this;

  mongoose.connect('mongodb://localhost/database');

  // Connect to mongodb and exit if there is no connection.
  this.db = mongoose.connection;
  this.db.on('error', function(error) {
    console.log("connection error: " + error);
    console.log("Please check connection settings and ensure MongoDB server is running.");
    process.exit(1);
  });

  self.httpServer = http.createServer(rootApp);
  self.httpServer.listen(self.port, function() {
    console.log("Server now listening on http://" + self.host + ":" + self.port);
  });
};

App.prototype.init = function(rootApp) {
  var self = this;

  admin = express();
  admin = this.initAdmin(admin);

  api = express();
  api = this.initApi(api);

  rootApp.set('views', path.join(__dirname, 'views'));
  rootApp.set('view engine', 'hbs');
  rootApp.use(logger('dev'));
  rootApp.use(bodyParser.json());
  rootApp.use(bodyParser.urlencoded({
    extended: true
  }));

  rootApp.use(allowCrossDomain);
  rootApp.use('/admin', admin);
  rootApp.use('/api', api);

  rootApp.disable('x-powered-by');

  return rootApp;
}

App.prototype.initAdmin = function(app) {
  var self = this;
  // app.set('views', path.join(self.rootPath, 'admin'));
  // app.set('view engine', 'hbs');
  app.use(routes.admin);
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(express.static(path.join(self.rootPath, 'admin/index.html')));
  app.disable('x-powered-by');
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  return app;
}

App.prototype.initApi = function(app) {
  var self = this;
  app.use(routes.api);
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.disable('x-powered-by');

  // NOTE: THIS IS ONLY FOR DEVELOPMENT. REMOVE THIS WHEN IN PRODUCTION!
  app.use(allowCrossDomain);

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  return app;
}

var allowCrossDomain = function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

module.exports = App;
