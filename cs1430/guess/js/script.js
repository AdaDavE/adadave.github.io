/**************************
 * Author: Adam Evans
 * Project: Random Number
 * Date: April 18, 2021
***************************/

/* ID's:
   message
   gameImage
   playerGuess
   submitGuess
   replayGame
*/

//generate number 1-99
var compNum;
var guessedNums = [];

function setGame(){
   document.getElementById("submitGuess").className ="show";
   document.getElementById("replayGame").className = "hide";
   document.getElementById("gameImage").src = "img/neutralFace.png";
   document.getElementById("message").innerText = "Can you guess what number I'm thinking of? You get 10 tries!";
   document.getElementById("playerGuess").value = "";
   compNum = Math.ceil(Math.random() * 99);
   console.log(compNum);
   
}

//get user Input:
function playGame(){
   var userNum = document.getElementById("playerGuess").value;
   if (userNum > compNum) {
      displayFace("high");
      guessedNums.push(userNum);
   }
   else if (userNum < compNum){ 
      displayFace("low");
      guessedNums.push(userNum);
   }
   else if (userNum == compNum){ 
      displayFace("win");
   }
   else{
      displayFace("err");
   }
   
   if (guessedNums.length > 10)
      displayFace("lose");
   
   document.getElementById("playerGuess").value = "";
   document.getElementById("playerGuess").select();
   document.getElementById("userGuesses").innerText = guessedNums;
   document.getElementbyID("tracker").innerText = "Your Guesses: " + guessedNums.length;
   
   
   
}     

//change image and text:
function displayFace(state){
   var image;
   var message;
   //do a switch:
   switch(state){
      case "high":
         message = "Too High!";
         image = "img/high.png";
         break;
      case "low":
         message = "Too Low";
         image = "img/low.png";
         break;
      case "win":
         message = "Correct! The number was " + compNum + ". Good Job!";
         image = "img/winFace.png";
         buttonVisibility();
         break;
      case "lose":
      message = "Too bad! You're out of guesses! The number was: " + compNum;
      image = "img/low.png";
      buttonVisibility();
      break;
      default: 
         message = "I don't understand...";
         image = "img/errFace.png";
   } 
   document.getElementById("message").innerText = message;
   document.getElementById("gameImage").src = image;   
}

function buttonVisibility(){
   document.getElementById("submitGuess").className = "hide";
   document.getElementById("replayGame").className = "show";
}