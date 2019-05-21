var express = require('express');

var app = express();

var weather = [
  {
    city: 'Kazan',
    temp: '+12',
    humidity: '54%',
    wind: '15 м/с'
  },
  {
    city: 'Volzhsk',
    temp: '+22',
    humidity: '50%',
    wind: '7 м/с'
  }
];

app.get('/weather', function(req, res){
  res.send(weather);
})

app.get('/weather/:city', function(req, res){
  console.log(req.params);
  var city_weather = weather.find(function (city_weather){
    return city_weather.city === req.params.city
  });
  res.send(city_weather);
})

app.listen(3012, function(){
  console.log('API app started');
})
