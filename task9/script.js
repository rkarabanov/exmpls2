var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]
console.log(input); // [1, 2, 3, 4, 5, 6]
function filter(arr,fn) {
  return arr.filter(fn);
}