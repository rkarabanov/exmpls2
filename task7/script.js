window.x = 1;
var ctx = { x: 2 };

function testThis(a) { console.log("x=" + this.x + ", a=" + a); }
testThis(100); // x=1, a=100
var boundFunction = testThis.bind(ctx);
boundFunction(100); // x=2, a= 100