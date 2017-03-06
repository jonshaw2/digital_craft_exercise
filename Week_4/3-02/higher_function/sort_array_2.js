var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
  
];

function short_name_sort(a, b){
  return a.length-b.length;
}

people = people.sort(short_name_sort);
console.log(people);
