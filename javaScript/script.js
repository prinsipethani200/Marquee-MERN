debugger;
// x = 30;
// console.log(`Value of x is ${x}`);

// var x = 10;

// console.log(`Value of x 2 is ${x}`);
console.log("Gobal Execution Context start");
var globalVariable = "I am a global variable";
console.log(globalVariable);
console.log(greet());
greet();
console.log(globalFunction);
console.log("Global Execution Context ends");
function greet() {
    var name = "princy";
    console.log("hello!! princy");
}
var globalFunction = function () {
    console.log("Inside global fuction");
};