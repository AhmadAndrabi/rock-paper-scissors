//Script element starts here.
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
}; //value from localStorage given to score and alt declared as default value.

score_Para(); //score_Para called here.

let isPlaying = false;

let intervalId;

function autoPlay() {
  if (!isPlaying) {
    intervalId = setInterval(() => {
      let my_Move = move_Pick();

      main_Game(my_Move);
    }, 1000);

    isPlaying = true;
  } else {
    clearInterval(intervalId);

    isPlaying = false;
  }
}
jsMoveButton1 = document.querySelector(".js-move-button1");
jsMoveButton2 = document.querySelector(".js-move-button2");
jsMoveButton3 = document.querySelector(".js-move-button3");

jsMoveButton1.addEventListener("click", () => {
  main_Game("stone");
});

jsMoveButton2.addEventListener("click", () => {
  main_Game("paper");
});

jsMoveButton3.addEventListener("click", () => {
  main_Game("scissors");
});

jsButtonReset = document.querySelector(".js-button-reset");
jsButtonAuto = document.querySelector(".js-button-auto");

jsButtonReset.addEventListener("click", () => {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.setItem("score", JSON.stringify(score));

  score_Para();
});

jsButtonAuto.addEventListener("click", () => {
  autoPlay();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    main_Game("stone");
  } else if (event.key === "p") {
    main_Game("paper");
  } else if (event.key === "s") {
    main_Game("scissors");
  }
});

function main_Game(my_Move) {
  const computer_Move = move_Pick(); //value of move pick returnes in computer_Move

  let result = "";

  if (my_Move === "scissors") {
    // code for my move-Scissors

    if (computer_Move === "stone") {
      // response for my move-scissors

      result = "you loose!";

      js_Move_Para("scissors", "stone");

      js_Result_Para("You Loose!");
    } else if (computer_Move === "scissors") {
      result = "it is a tie!";

      js_Move_Para("scissors", "scissors");

      js_Result_Para("Tie!");
    } else if (computer_Move === "paper") {
      result = "you win!";

      js_Move_Para("scissors", "paper");

      js_Result_Para("You Win!");
    } //end of respose of my move -scissors
    //end of my move - scissors
  } else if (my_Move === "paper") {
    // code for my move-Paper

    if (computer_Move === "stone") {
      // response for my move-stone

      result = "you win!";

      js_Move_Para("paper", "stone");

      js_Result_Para("You Win!");
    } else if (computer_Move === "scissors") {
      result = "you loose!";

      js_Move_Para("paper", "scissors");

      js_Result_Para("You Loose!");
    } else if (computer_Move === "paper") {
      result = "it is a tie!";

      js_Move_Para("paper", "paper");

      js_Result_Para("Tie!");
    } //end of response for my move-paper
    //end for my move-paper.
  } else if (my_Move === "stone") {
    //  code for my move-Stone.
    if (computer_Move === "stone") {
      // response for my move-Stone.

      result = "it is a tie!";

      js_Move_Para("stone", "stone");

      js_Result_Para("Tie!");
    } else if (computer_Move === "scissors") {
      result = "you win!";

      js_Move_Para("stone", "scissors");

      js_Result_Para("You Win!");
    } else if (computer_Move === "paper") {
      result = "you loose!";

      js_Move_Para("stone", "paper");

      js_Result_Para("You Loose!");
    } //end of response for my code for Stone
  } //end of my code for Stone.

  if (result === "you win!") {
    score.wins += 1;
  } else if (result === "it is a tie!") {
    score.ties += 1;
  } else if (result === "you loose!") {
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  //local storage here.

  score_Para(); //data of of local storage put into js-score-para here.
} //this is the end of main_Game.

//js_Move_Para starts here.
function js_Move_Para(you, computer) {
  document.querySelector(".js-moves-para").innerHTML = `Your move:
      <img
        src="icons/${you}-emoji.png"
        alt="Stone emoji"
        class="emoji-icon"
      />
      Computer move:
      <img src="icons/${computer}-emoji.png" alt="Stone emoji" class="emoji-icon" />`;
} //js_Move_Para ends here.

//js_Result_Para starts here.
function js_Result_Para(result) {
  document.querySelector(".js-result").innerHTML = result;
} //js_Result_Para ends here.

function score_Para() {
  document.querySelector(".js-score-para").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function move_Pick() {
  //code for computer to select move.

  let computer_Move = "";

  let random_Number = Math.random();

  if (random_Number >= 0 && random_Number < 1 / 3) {
    computer_Move = "stone";
  } else if (random_Number >= 1 / 3 && random_Number < 2 / 3) {
    computer_Move = "scissors";
  } else if (random_Number >= 2 / 3 && random_Number < 1) {
    computer_Move = "paper";
  }

  return computer_Move;
} // code for computer select move ends here.
