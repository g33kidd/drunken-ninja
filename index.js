var http      = require('http');
var url       = require('url');
var fs        = require('fs');
var path      = require('path');
var express   = require('express');
var App       = require('./core');

var rootApp = express();

var app = new App();
app.init(rootApp);
app.start(rootApp);
