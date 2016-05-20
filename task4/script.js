var gen = sequence(1, 1);
function square(x) { return x * x; }

function sequence(start, step) {
 		 i=0;
	return function () {
 	return step*(i++)+start||0;
 }
}

function add(a, b) { 
  return a + b; 
}

function fmap(a,gen, ...sep) {
	return function ( ...sep) {
		//console.log(...sep);
	return a(gen( ...sep));	
	}
}
var squareGen = fmap(square, gen);

// console.log(squareGen()); // 1
// console.log(squareGen()); // 4
// console.log(squareGen()); // 9
// console.log(squareGen()); // 16
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2