var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = deepCopy(objects);
console.log(shallow[0] === objects[0]);

function deepCopy(obj) {
	return _.cloneDeep(obj);
}