/**************************
 * Author: Adam Evans
 * Project: Lottery Numbers
 * Date: April 15, 2021
 ***************************/
 

do { 
   var n = prompt("How many numbers would you like? (10 at most): ");
   if (n > 10 || n < 1) 
      alert("Try again. Number invalid! Must be Greater than 0 or less than 10!");
} while (n > 10 || n < 1); 

generateNumber();

function generateNumber() {
   var generatedNums = "";
   var lottoNums = [];
   for (var i = 0; i < n; i++)
      lottoNums[i] = Math.ceil(Math.random() * 99);

   //Display Array:

   for (var i = 0; i < lottoNums.length; i++){
      if (i == 0) 
         generatedNums += lottoNums[i];
      else
         generatedNums += "-" + lottoNums[i];
   }
   //Now print out:
   document.getElementById("numbers").innerText = generatedNums;
}