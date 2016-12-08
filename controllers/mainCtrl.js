var user = require('../user.js');
var skills = require('../skills.js');
var secrets = require('../secrets.js');

exports.getName = function(req, res, next) {
  res.status(200).json({ name: user.name });
}

exports.getLocation = function(req, res, next) {
  res.status(200).json({ location: user.location });
}

exports.getOccupations = function(req, res, next) {
  var results = [];
  if (req.query.order === 'desc') {
    results = user.occupations.sort();
  } else if (req.query.order === 'asc') {
    results = user.occupations.sort().reverse();
  } else {
    results = user.occupations;
  }
  res.status(200).json({ occupations: results });
}

var latestOccupation = user.occupations[user.occupations.length - 1];

exports.getLatestOccupation = function(req, res, next) {
  res.status(200).json({ latestOccupation: latestOccupation })
}

exports.getHobbies = function(req, res, next) {
  res.status(200).json({ hobbies: user.hobbies });
}

exports.getHobbiesOfType = function(req, res, next) {
  var result = user.hobbies.filter(function(value) {
    return (value.type === req.params.type);
  });
  res.status(200).json({ hobbies: result });
}

exports.getFamily = function(req, res, next) {
  res.status(200).json({ family: user.family })
}

exports.getFamilyByGender = function(req, res, next) {
  var result = user.family.filter(function(value) {
    return (value.gender === req.params.gender);
  });
  res.status(200).json({ family: result });
}

exports.getRestaurants = function(req, res, next) {
  var results = [];
  if (req.query.q === 'rating') {
    results = user.restaurants.filter(function(value) {
      return (value.rating >= 2);
    });
  } else {
    results = user.restaurants;
  }
  res.status(200).json({ restaurants: results });
}

exports.getRestaurantByName = function(req, res, next) {
  var result = user.restaurants.filter(function(value) {
    return (value.name === req.params.name);
  });
  res.status(200).json({ restaurant: result });
}

exports.updateName = function(req, res, next) {
  user.name = req.body.name;
  res.status(200).send('Name Updated');
}

exports.updateLocation = function(req, res, next) {
  user.location = req.body.location;
  res.status(200).send('Location Updated');
}

exports.createHobby = function(req, res, next) {
  user.hobbies.push(req.body.hobby);
  res.status(200).send('New hobby added');
}

exports.createOccupation = function(req, res, next) {
  user.occupations.push(req.body.occupation);
  res.status(200).send('New occupation added');
}

exports.createFamilyMember = function(req, res, next) {
  user.family.push(req.body.familyMember);
  res.status(200).send('New family member added');
}

exports.createRestaurant = function(req, res, next) {
  user.restaurants.push(req.body.restaurant);
  res.status(200).send('New restaurant added');
}

exports.getSkills = function(req, res, next) {
  var results = [];
  if (req.query.experience) {
    results = skills.list.filter(function(value) {
      return (value.experience === req.query.experience);
    });
  } else {
    results = skills.list;
  }
  res.status(200).json({ skills: results });
}

exports.createSkill = function(req, res, next) {
  skills.list.push(req.body.skill);
  res.status(200).send('New skill added');
}

exports.getSecrets = function(req, res, next) {
  res.status(200).json({ secrets: secrets });
}
