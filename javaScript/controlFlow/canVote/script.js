function canVote(age) {
    if (age >= 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible";
    }
}

console.log(canVote(20));
console.log(canVote(15));