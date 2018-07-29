$(document).ready(function() {
  //variables
  let wins = 0;
  let losses = 0;
  let userScore = 0;
  //creates a random number from 1-12 for each crystal
  let userNum1 = Math.floor(Math.random() * 12 + 1);
  let userNum2 = Math.floor(Math.random() * 12 + 1);
  let userNum3 = Math.floor(Math.random() * 12 + 1);
  let userNum4 = Math.floor(Math.random() * 12 + 1);
  // chooses random number 19 through 120.
  let randomNum = Math.floor(Math.random() * 102 + 19);

  //game chooses random number 19 through 120 and displays on html.
  function RandomNumberGenerater() {
    $("#randomNumber").text(randomNum);
  }
  //creates a random number for each crystal
  function UserNumGenerator() {
    $("#crystal1").click(function() {
      userNum1;
      userScore += userNum1;
      $("#userScore").text(userScore);
      checkLoss();
      checkWin();
    });

    $("#crystal2").click(function() {
      userNum2;
      userScore += userNum2;
      $("#userScore").text(userScore);
      checkLoss();
      checkWin();
    });

    $("#crystal3").click(function() {
      userNum3;
      userScore += userNum3;
      $("#userScore").text(userScore);
      checkLoss();
      checkWin();
    });

    $("#crystal4").click(function() {
      userNum4;
      userScore += userNum4;
      $("#userScore").text(userScore);
      checkLoss();
      checkWin();
    });
  }

  function checkWin() {
    if (userScore === randomNum) {
      alert("You win");
      wins++;
      $("#wins").text(wins);
      reset();
    }
  }

  function checkLoss() {
    if (userScore > randomNum) {
      alert("You Lose");
      losses++;
      $("#losses").text(losses);
      reset();
    }
  }

  function reset() {
    randomNum = Math.floor(Math.random() * 102 + 19);
    RandomNumberGenerater();
    userScore = 0;
    $("#userScore").text(userScore);
    userNum1 = Math.floor(Math.random() * 12 + 1);
    userNum2 = Math.floor(Math.random() * 12 + 1);
    userNum3 = Math.floor(Math.random() * 12 + 1);
    userNum4 = Math.floor(Math.random() * 12 + 1);
  }
  UserNumGenerator();
  RandomNumberGenerater();
});
