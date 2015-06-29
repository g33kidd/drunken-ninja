var express     = require('express');
var middleware  = require('./middleware');
var Server      = require('./server');

function init() {
  var rootApp = express(),
      adminApp = express();

  // Setup the middleware and create new Server instance.
  middleware(rootApp, adminApp);
  return new Server(rootApp);
}

module.exports = init;
