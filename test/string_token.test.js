const assert = require('assert'),
  jwt = require('jsonwebtoken'),
  restifyjwt = require('../lib');

describe('string tokens', function () {
  var req = {};
  var res = {};

  it('should work with a valid string token', function () {
    var secret = 'shhhhhh';
    var token = jwt.sign('foo', secret);

    req.headers = {};
    req.headers.authorization = 'Bearer ' + token;
    restifyjwt({secret: secret})(req, res, function () {
      assert.equal('foo', req.user);
    });
  });

});
