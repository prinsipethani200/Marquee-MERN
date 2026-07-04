function canDrive(age, hasLicense) {
    if (age >= 18) {
        if (hasLicense) {
            return "Can Drive";
        } else {
            return "Cannot Drive (No License)";
        }
    } else {
        return "Underage";
    }
}

console.log(canDrive(20, true));
console.log(canDrive(20, false));
console.log(canDrive(16, true));