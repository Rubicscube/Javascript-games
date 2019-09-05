let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-scoreboard");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");





function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    userChoice_div.classList.add("grey-glow");
    setTimeout(() =>userChoice_div.classList.remove("grey-glow"), 300);



}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            console.log("USER LOSES.");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            console.log("Its a draw.");
            break;
    }


}


function main() {
    rock_div.addEventListener("click", function () {

        game("r")


    });
    paper_div.addEventListener("click", function () {
        game("p");


    });
    scissors_div.addEventListener("click", function () {
        game("s");

    });
}

main();




