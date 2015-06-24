var http        = require('http');
var express     = require('express');
var bodyParser  = require('body-parser');
var routes      = require('./routes');
var path        = require('path');

function App() {
  this.host = '127.0.0.1';
  this.port = 3000;
  this.httpServer = null;
};

App.prototype.start = function(rootApp) {
  var self = this;

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
  rootApp.use(bodyParser.json());
  rootApp.use(bodyParser.urlencoded({
    extended: true
  }));

  rootApp.use('/admin', admin);
  rootApp.use('/api', api);

  return rootApp;
}

App.prototype.initAdmin = function(app) {
  app.use(routes.admin);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');
  return app;
}

App.prototype.initApi = function(app) {
  app.use(routes.api);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');
  return app;
}

module.exports = App;
