var skills = require('../skills');

exports.addHeaders = function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
};

exports.generateID = function(req, res, next) {
  req.body.skill.id = skills.list.length;
  next();
};

var username = 'sampleUser';
var pin = '1111';

exports.verifyUser = function(req, res, next) {
  if (req.params.username === username && req.params.pin === pin) {
    next();
  } else {
    res.status(403).send('Wrong username or pin');
  }
}
