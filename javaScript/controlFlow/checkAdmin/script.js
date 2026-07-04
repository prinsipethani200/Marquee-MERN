function checkAdmin(role) {
    if (role === "admin") {
        return "Access Granted";
    } else {
        return "Access Denied";
    }
}

console.log(checkAdmin("admin"));
console.log(checkAdmin("user"));