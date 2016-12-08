var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

app.get('/name', mainCtrl.getName);

app.get('/location', mainCtrl.getLocation);

app.get('/occupations', mainCtrl.getOccupations);

app.get('/occupations/latest', mainCtrl.getLatestOccupation);

app.get('/hobbies', mainCtrl.getHobbies);

app.get('/hobbies/:type', mainCtrl.getHobbiesOfType);

app.get('/family', mainCtrl.getFamily);

app.get('/family/:gender', mainCtrl.getFamilyByGender);

app.get('/restaurants', mainCtrl.getRestaurants);

app.get('/restaurants/:name', mainCtrl.getRestaurantByName);

app.put('/name', mainCtrl.updateName);

app.put('/location', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.createHobby);

app.post('/occupations', mainCtrl.createOccupation);

app.post('/family', mainCtrl.createFamilyMember);

app.post('/restaurants', mainCtrl.createRestaurant);

app.get('/skills', mainCtrl.getSkills);

app.post('/skills', middleware.generateID, mainCtrl.createSkill);

app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);
