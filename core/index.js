var server = require('./server');

// Set the default environment to be `development`
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function createServer(options) {
  options = options || {};
  return server(options);
}

module.exports = createServer;
