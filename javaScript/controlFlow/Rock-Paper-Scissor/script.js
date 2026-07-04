function whoWins(user, computer) {
    switch (user + "-" + computer) {
        case "rock-scissor":
        case "paper-rock":
        case "scissor-paper":
            console.log("User Wins");
            break;

        case "rock-rock":
        case "paper-paper":
        case "scissor-scissor":
            console.log("Match Draw");
            break;

        default:
            console.log("Computer Wins");
    }
}


whoWins("rock", "paper");
whoWins("paper", "rock");