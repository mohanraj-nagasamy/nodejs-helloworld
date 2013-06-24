
/*
 * GET users listing.
 */
_ = require('underscore');

exports.list = function(req, res){

  res.send(_.toArray(['user1', 'user2']).join(", "));
};