let playerchoice = prompt("Type your choice: rock, paper or scissors");
okplayer = playerchoice.toLocaleLowerCase();
let result = "";

let okcomputer = "";
let computerchoice = Math.random();
if (computerchoice < 0.34) {
okcomputer = "rock";
} else if (computerchoice <= 0.67){
    okcomputer = "paper";
} else {
    okcomputer = "scissors";
}

function letsee(okplayer, okcomputer) {
    if ((okplayer === "rock" && okcomputer === "scissors") || (okplayer ==="scissors" && okcomputer === "paper") || (okplayer === "paper" && okcomputer === "rock")) {
        return result = "YOU WON MOTHERFUCKER";
    } else if ((okcomputer === "rock" && okplayer === "scissors") || (okcomputer ==="scissors" && okplayer === "paper") || (okcomputer === "paper" && okplayer === "rock")) {
        return result = "AHAHAAHA YOU LOST AGAINST A COMPUTER";
    } else if ((okplayer === "rock" && okcomputer === "rock") || (okplayer ==="scissors" && okcomputer === "scissors") || (okplayer === "paper" && okcomputer === "paper")) {
        return result = "COM'ON YOU REALLY HAD A TIE WITH A MACHINE? TRY AGAIN BITCH";
    } else {
        return result = "IT'S EITHER YOU DON'T KNOW HOW TO WRITE OR HOW TO READ!!!!";
    }
}
letsee(okplayer, okcomputer);
window.alert(result);