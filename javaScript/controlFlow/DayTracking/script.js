function Day(num) {
    switch (num) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 7:
            return "Saturday";
            break;
        default:
            return "Sunday";
            break;
    }
}

console.log(Day(1));
console.log(Day(2));
console.log(Day(9));