function isTypeOf(a) {
	if((typeof a)=='undefined'){
		return 'undefined';
	}
	else if (toString.call(a)=='[object Boolean]'){
	return 'boolean';
	}
	else if(a==null){
	return 'null';
	}
	else if(toString.call(a)=='[object Number]'){
		return 'number';
	}
	else if(Object.prototype.toString.call(a) === '[object String]'){
		return 'string';
	}
	else if(_.isFunction(a)){
		return 'function';
	}
	else if(_.isArray(a)){
		return 'array';
	}
	else if(_.isArrayLike(a)){
		return 'array-like';
	}
	else if(_.isObject(a)){
		return 'object';
	}
	else{
		return "I don't know";
	}
}

console.log(isTypeOf(undefined));
console.log(isTypeOf(true));
console.log(isTypeOf(null));
console.log(isTypeOf(55));
console.log(isTypeOf("Just do it"));
console.log(isTypeOf(function () {
}));
console.log(isTypeOf([1,2,3]));
console.log(isTypeOf(document.body.children));
console.log(isTypeOf({}));