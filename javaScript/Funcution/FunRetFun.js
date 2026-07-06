function greet(fn) {
    return fn();
}

function Hello() {
    return "Hello , Guys!!";
}

console.log(greet(Hello));