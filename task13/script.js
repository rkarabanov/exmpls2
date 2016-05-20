console.log(perfect_number(17));
console.log(perfect_number(8128));
console.log(perfect_number(128));
console.log(perfect_number(15));
console.log(typeof(list(1, 2, 3)));
function list() {
  return Array.prototype.slice.call(arguments);
}
function perfect_number(num) {
	var array=[];
var sumDivisors=0;
for (var i = 1; i <=num/2; i++) {
if(num%i==0){array.push(i);}
}
array.push(num);
return array;
}