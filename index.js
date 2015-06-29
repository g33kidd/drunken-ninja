var app = require('./core');

// Starts the entire application
appServer = app();
appServer.start();

// Use something like below eventually using promises.
// Possibly the bluebird lib.
/*app().then(function(appServer) {
  appServer.start();
}).catch(function(err) {
  console.log(err);
  process.exit(-1);
});*/
