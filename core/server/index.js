var express     = require('express');
var middleware  = require('./middleware');
var compress    = require('compression');
var Server      = require('./server');

function init() {
  var rootApp = express(),
      adminApp = express();

  // Use gzip compression by default
  rootApp.use(compress());

  middleware(rootApp, adminApp);
  return new Server(rootApp);
}

module.exports = init;
