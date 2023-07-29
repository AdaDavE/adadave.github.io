/*********************
 * Author: Adam Evans
 * Project: Final Page
 *********************/
 
 var quotes = ["\“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.\” Joe Girard",
               "\“I am so clever that sometimes I don’t understand a single word of what I am saying.\” Oscar Wilde",
               "\“Change is not a four letter word… but often your reaction to it is!\” Jeffrey Gitomer",
               "\“If you think you are too small to make a difference, try sleeping with a mosquito.\” ",
               "\“A clear conscience is a sure sign of a bad memory.\” Mark Twain",
               "\“You’re only given a little spark of madness. You mustn’t lose it.\” Robin Williams",
               "\“When tempted to fight fire with fire, remember that the Fire Department usually uses water.\” Unknown",
               "\ “A few harmless flakes working together can unleash an avalanche of destruction.\” Justin Sewell"
               ];
var music = new Audio("js/Winners.mp3"); //from Zapsplat.com

function generateQuote(){
   var quote = Math.floor(Math.random() * 7);
   document.getElementById("quote").innerText = quotes[quote];
}
function inspiration(){
   (music.duration <= 0) 
      music.play();
   generateQuote();
}