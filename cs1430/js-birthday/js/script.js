var username = prompt("Enter your name: ");
var age = prompt("Enter your age: ");
var month = prompt("What month were you born in? ");
var season;
month = month.toLowerCase();

if (month == "december" || month == "january" || month == "february")
   season = ", and you were born in the winter.";
else if (month == "march" || month == "april" || month == "may")
   season = ", and you were born in the spring."; 
else if (month == "june" || month == "july" || month == "august")
   season = ", and you were born in the summer.";
else if (month == "september" || month == "october" || month == "november")
   season = ", and you were born in the fall.";
else 
   season = ", and you were born in " + month + ".";
alert("Happy Birthday " + username + "! You are " + age + season);