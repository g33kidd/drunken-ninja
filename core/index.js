var http      = require('http');
var express   = require('express');

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
  rootApp.use('/admin', admin);

  return rootApp;
}

module.exports = App;
