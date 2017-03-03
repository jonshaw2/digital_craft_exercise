var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function temperatureCompare(n){
  return n.temperature < 70;
}

var city = cities.filter(temperatureCompare);
console.log(city);
