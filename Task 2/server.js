var express = require('express');

var app = express();

var weather = require('./db.js');

app.get('/weather/:id', function(req, res, next) {
  console.log(req.params);
  var city_weather = weather.find(function(city_weather) {
    return city_weather.id === Number(req.params.id)
  });
  if (city_weather == null || city_weather == 'undefined') {
    res.status(404);
  }
  res.send(city_weather);
})

app.listen(3012, function() {
  console.log('API app started');
})
