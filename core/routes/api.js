var express = require('express');
var router  = express.Router();

apiRoutes = function() {

  router.get('/', function(req, res) {
    // Just for testing, change this later to actually check
    // if the user is logged in.
    res.json({
      error: "Access denied!",
      message: "You must be logged in."
    });
  });

  // Again, just for testing and specifications.
  router.route('/posts')
    .all(function(req, res, next) {
      next();
    })
    .get(function(req, res) {
      res.json({
        id: "",
        user_id: "",
        title: "",
        content: ""
      })
    })
    .post(function(req, res) {
      if(req.body.title && req.body.content) {
        res.json({
          title: req.body.title,
          content: req.body.content
        })
      }else{
        res.json({
          error: "params required",
          message: "The required params were not received."
        })
      }
    });

  return router;
}

module.exports = apiRoutes();
