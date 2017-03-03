var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function temperatureCompare(n){
  return n.temperature < 70;
}

function city_name(n){
  return n.name;
}

var city = cities.filter(temperatureCompare);
var city_temperature_name = city.map(city_name);
console.log(city_temperature_name);
