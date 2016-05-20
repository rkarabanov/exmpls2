var arr = [1, 2, 3];
function square(x) { return x * x; }
console.log(map(square, arr));
function map(fn, arr) {
    var array=arr.map(fn);
    // console.log(arr);
    // console.log(toString.call(array));
    return array;
}