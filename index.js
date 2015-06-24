var http      = require('http');
var url       = require('url');
var fs        = require('fs');
var path      = require('path');
var express   = require('express');
var App       = require('./core');

var options = {
  rootPath: path.resolve(__dirname)
};

var rootApp = express();

var app = new App(options);
app.init(rootApp);
app.start(rootApp);
