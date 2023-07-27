document.addEventListener("DOMContentLoaded", () => {
  let winner;
  let maxNumber1 = 0;
  
  let maxNumber = 0;

  const winnerDisplaysPlayer = [
    "Wow, you won!",
    "Wow, do you really want to play again?",
    "Let me guess, you feel better because you won...",
    "What is the meaning of life? For sure, it is not playing Tic Tac Toe!",
    "So you won, what inspiring thing are you going to do next?",
    "You look like a guy who watched all seasons of Sex and the City with a girl to get laid, but in the end, you didn't.",
    "Oh, congratulations! You won! Your parents must be so proud.",
    "Oh, you want to play again? How surprising! I can't imagine a more exciting way to spend my time.",
    "Oh, I'm sure winning a game like this makes you feel like a true champion. Don't let it get to your head.",
    "Oh, you're playing Tic Tac Toe? That's definitely the pinnacle of intellectual pursuits.",
    "Oh, you won! What an incredible achievement! I'm on the edge of my seat, wondering what monumental task you'll tackle next.",
    "Not all men are annoying. Some are dead. Which one are you?",
    "If I promise to miss you, will you go, like, really far away?",
    "Did something bad happen to you, or are you just naturally this terrible of a person?",
    "If at first you don't succeed, stop trying already. You're probably dumb.",
    "You are fired.",
    "Those of you who think you know it all are really annoying to those of us who do.",
    "Well, this day was a total waste of time, I mean playing with you!",
    "Hear that? It's the sound of you not talking for once.",
    "You should ask yourself why I drink.",
    "Just remember, you play tic-tac-toe and other people don't."
  ];
  
  const looserDisplayPlayer = [
    "Losing at tic-tac-toe seems to be your secret superpower. The world truly needs more heroes like you.",
    "Oh, another loss! Your dedication to achieving new levels of defeat is truly awe-inspiring.",
    "Congratulations on your impeccable ability to snatch defeat from the jaws of victory every time.",
    "You lost again? It's like watching a masterclass in the art of losing. Truly captivating.",
    "Ah, the joy of losing! It's like a warm blanket of disappointment, embracing you with each move.",
    "If losing were an Olympic sport, you would definitely be a gold medalist. Keep up the exceptional performance!",
    "Oh, the sweet symphony of failure! It's almost music to my ears, watching you lose at tic-tac-toe.",
    "You have an uncanny talent for making losing at tic-tac-toe look effortless. It's truly a gift.",
    "Another loss for the record books! Your commitment to losing is unparalleled. Keep up the good work!",
    "You lost again, but don't worry, losing builds character. And you, my friend, are truly full of character.",
    "Oh, losing again? You must be the master of turning victories into defeats!",
    "Congratulations on your remarkable ability to find creative ways to lose at tic-tac-toe.",
    "You lost once more? It's like you have a magnetic attraction to failure.",
    "Ah, the beauty of losing! It's like a fine art that only a few truly understand.",
    "If there was an award for losing, you'd be the undisputed champion. Keep up the incredible consistency!",
    "Oh, the sweet taste of defeat! It's a flavor that suits you perfectly.",
    "You make losing at tic-tac-toe look so effortless. It's almost a talent.",
    "Another loss added to your impressive collection! Your dedication to losing is truly inspiring.",
    "You lost again, but don't fret! You're paving the way for a new generation of losers.",
    "Losing at tic-tac-toe must be your favorite pastime. Your commitment is unmatched!"
  
  ];

  function randomElement() {
    return winnerDisplaysPlayer[Math.floor(Math.random() * winnerDisplaysPlayer.length)];
  }
  function randomElement2() {
    return looserDisplayPlayer[Math.floor(Math.random() * looserDisplayPlayer.length)];
  }


  // player vs player dispaly
  

 
  function checkWinner(board) {
    if (
      (board[0] === board[1] && board[1] === board[2] && board[1] !== '_')){
         return `Winner is ${board[0]}`;
      } else if(
        (board[0] === board[3] && board[3] === board[6] && board[3] !== '_')){
          return `Winner is ${board[0]}`
      } else if((board[0] === board[4] && board[4] === board[8] && board[4] !== '_')){
        return `Winner is ${board[0]}`
      } else if(    
        (board[1] === board[4] && board[4] === board[7] && board[4] !== '_')){
        return `Winner is ${board[1]}`;
      } else if (
        (board[2] === board[4] && board[4] === board[6] && board[4] !== '_')){
        return `Winner is ${board[2]}`;
      } else if(
        (board[2] === board[5] && board[5] === board[8] && board[5] !== '_')){
        return `Winner is ${board[2]}`
      } else if(
        (board[3] === board[4] && board[4] === board[5] && board[4] !== '_')){
        return `Winner is ${board[3]}`;
      } else if(
        (board[6] === board[7] && board[7] === board[8] && board[7] !== '_')) {
        return `Winner is ${board[6]}`;
      } 
  }
    
  function playAgainsFriend() {
    let buttons = document.getElementsByClassName("empty2");
    let activePlayer = 1;
    let winnerElement = document.getElementById("winnerIs2");
    let looserParagraf = document.getElementById("looserP");
    let winnerParagraf = document.getElementById("winnerP")
    

  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", (event) => {
        let clickedButton = event.target;
  
        if (clickedButton.innerHTML !== "_") {
          return;
        }
  
        if (activePlayer === 1) {
          clickedButton.innerHTML = "X";
          clickedButton.classList.add("iks");
        } else {
          clickedButton.innerHTML = "O";
          clickedButton.classList.add("oks");
          clickedButton.disabled = true;
        }
        maxNumber++

        activePlayer = activePlayer === 1 ? 2 : 1;
  
        let gameBoard = [];
        for (let i = 0; i < buttons.length; i++) {
          gameBoard.push(buttons[i].innerHTML);
        }
        
        let winner = checkWinner(gameBoard);
        
        if (maxNumber === 9) {
          winnerElement.textContent = "PHAHAHAHAHHAHAHA you can't even win in tic tac toe!"
        }


        if (winner) {
          winnerElement.textContent = winner;
          looserParagraf.textContent = randomElement2();
          winnerParagraf.textContent = randomElement();
          disableAllButtons();

        }
      });
    }
  
    document.querySelector(".resetButton2").addEventListener("click", resetGame);
  
    function resetGame() {
      activePlayer = 1;
      winnerElement.textContent = "Who is going to win this great game?";
      looserParagraf.textContent = "Message for looser: ";
      winnerParagraf.textContent = "Message for winner: ";
      maxNumber = 0;
      resetGameBoard();
    }
  
    function resetGameBoard() {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "_";
        buttons[i].classList.remove("iks", "oks");
        buttons[i].disabled = false;
      }
    }
  
    function disableAllButtons() {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  };

  playAgainsFriend()
  
  });
  




