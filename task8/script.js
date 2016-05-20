var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']
function pluck(objects, fieldName) {
    var values = [];  
    for (var i = 0; i < objects.length; i++) {
    	values[i]=objects[i][fieldName];
    }
return values;
}