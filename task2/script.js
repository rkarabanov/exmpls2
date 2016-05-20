var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
function take(fn, count) {
	var array=[]
	for (var i = 0; i < count; i++) {
		array[i]=fn();
	}
	return array;
}
function sequence(start, step) {
 		 i=0;
step=step||1;
 	return function () {
 	return step*(i++)+start||0;
 }
}