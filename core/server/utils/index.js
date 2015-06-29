var _     = require('underscore');

module.exports = {

  validParams: function(params, required) {
    _.each(params, function(param) {
      if(_.has(required, param)) {
        
      }
    });
  }

};
