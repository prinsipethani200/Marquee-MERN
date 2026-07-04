function divisire() {
    for (var i = 1; i <= 15; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i);
        }
    }
}
function NotDivisire() {
    for (var i = 1; i <= 30; i++) {
        if (i % 3 != 0 & i % 5 != 0) {
            console.log(i);
        }
    }
}
console.log("Divided");
divisire();
console.log("Not divided");
NotDivisire();