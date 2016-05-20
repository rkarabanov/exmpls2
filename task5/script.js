
function mult(a, b, c, d) { return a * b * c * d; }

var f2 = partial(mult,1, 2);
console.log(f2(4,5));

function partial(fn) {
var Bargs = Array.prototype.slice.call(arguments,1);
return function () {
	var args = [].slice.call(arguments);
    var unshiftArgs = Bargs.concat(args);
    return fn.apply(this, unshiftArgs);
};
}