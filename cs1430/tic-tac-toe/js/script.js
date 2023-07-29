/************************
 * Author: Adam Evans
 * Project: Tic-Tac-Toe 
 * Date: April 25, 2021
 *************************/

//TODO:


//get players
//display management

var markers = ["X", "O"];
var turn = 0;
var totals = [];
var winValues = [7,56,73,84,146,273,292,448];
var players = []; //take from input.
var playerScore = [0,0];
var ties = 0;
var gameOver = false;
// Sound files from www.zapsplat.com
var winSound = new Audio("js/win.mp3");
var tieSound = new Audio("js/tie.mp3");

function onLoad(){
   players[0] = prompt("Player 1: ");
   players[1] = prompt("Player 2: ");
   document.getElementById("player1").innerText = players[0];
   document.getElementById("player2").innerText = players[1];
   
   startGame();
}

function startGame(){
   //set scores:
   document.getElementById("score1").innerText = playerScore[0];
   document.getElementById("score2").innerText = playerScore[1];
   document.getElementById("scoreTie").innerText = ties;
   
   if (document.getElementById("show")) document.getElementById("show").id = "hidden";
   var counter = 1;
   var board = document.getElementById("game-board");
   var innerDivs = "";
   document.getElementById("game-message").innerText = "It is " + players[turn] + "'s Turn!";
   for (i = 1; i <= 3; i++){
      innerDivs += '<div id="row-' + i + '">';
      for (j=1; j<=3; j++){
         innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>';
         counter *=2;
      }
      innerDivs += '</div>';
   }
   board.innerHTML = innerDivs;
   totals = [0,0];
   gameOver = false;
}

function playGame(clickedDiv, divValue){
  if (!gameOver){
     clickedDiv.innerText = markers[turn];
     totals[turn] += divValue;
     
     if (isWin()){
        winSound.play();
        document.getElementById("game-message").innerText = players[turn] + " Wins!";
        document.getElementById("hidden").id = "show";
     }
     else if (gameOver){
        tieSound.play();
        document.getElementById("game-message").innerText = "TIE GAME!";
        document.getElementById("hidden").id = "show";
     }
     else {
        if (turn) turn = 0; else turn = 1; 
        
        clickedDiv.attributes["0"].nodeValue = "";
        
        document.getElementById("game-message").innerText = "It is " + players[turn] + "'s Turn!";
     }
  }
}

function isWin(){
   for (i=0; i < winValues.length; i++){
      if ((totals[turn] & winValues[i]) == winValues[i]) {
      gameOver = true;
      playerScore[turn]++;
      return true;
      }
   } 
   if (totals[0] + totals[1] == 511){
      ties++;
      gameOver = true;
   }
   return false;
}