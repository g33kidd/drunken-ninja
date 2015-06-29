var path        = require('path');
var mongoose    = require('mongoose');
var errors      = require('./errors');
var chalk       = require('chalk');

function Server(rootApp) {
  this.rootApp = rootApp;
  this.host = '127.0.0.1';
  this.port = 3000;
  this.httpServer = null;
  /*this.rootPath = options.rootPath;*/
};

Server.prototype.start = function start() {
  var self = this;
  var rootApp = self.rootApp;

  mongoose.connect('mongodb://localhost/database');

  // Connect to mongodb and exit if there is no connection.
  this.db = mongoose.connection;
  this.db.on('error', function(error) {
    console.log("connection error: " + error);
    console.log("Please check connection settings and ensure MongoDB server is running.");
    process.exit(1);
  });

  self.httpServer = rootApp.listen(self.port, self.host);
  self.httpServer.on('error', function(error) {
    console.log("ERROR: " + error);
  });

  self.httpServer.on('listening', function() {
    self.logStartMessages();
  });
};

Server.prototype.logStartMessages = function() {
  var self = this;
  if(process.env.NODE_ENV === 'development') {
    console.log(
      chalk.green('App is running in ' + process.env.NODE_ENV + '...'),
      '\nListening on',
      "http://" + self.host + ':' + self.port,
      chalk.gray('\nCtrl+C to shut down')
    );
  }

  function shutdown() {
    console.log(chalk.red("\nApp has shutdown!"));
    process.exit(0);
  }

  process.removeAllListeners('SIGINT').on('SIGINT', shutdown).
  removeAllListeners('SIGTERM').on('SIGTERM', shutdown);
}

module.exports = Server;
