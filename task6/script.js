function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
var test1_3 = partialAny(test, 1, undefined);
console.log(test1_3(5,3)); // a=1,b=5,c=3
function partialAny(fn) {
var bArgs = [].slice.call(arguments,1);
var arr=[],
arr1=[];
for (var i = 0; i < bArgs.length; i++) {
	if(typeof bArgs[i]!=='undefined'){
		arr.push(bArgs[i]);
	}
	else{
		arr1.push(i);
	}
}
console.log(test());
var	len=bArgs.length;
return function () {
	var arr2=[];
	console.log(arr1);
	var args = [].slice.call(arguments);
	var j=0;
for (var k = 0,i=0; k < len; k++) {
		if (k!==arr1[j]) {
				arr2.push(arr[i]);
		i++;
		} else {
			arr2.push(args[j]);
			j++;
		}
	}
	while(j<args.length){
		arr2.push(args[j]);
		j++;
	}
    return fn.apply(this, arr2);
};
}