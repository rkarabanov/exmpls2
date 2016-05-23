var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = shallowCopy(objects);
console.log(shallow[0] === objects[0]);

function shallowCopy(obj) {
    return _.clone(obj);
}