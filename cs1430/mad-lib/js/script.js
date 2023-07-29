//JAVASCRIPT by ADAM EVANS

var noun1 = prompt("Welcome! Please type a noun (1/11): ");
var noun2 = prompt("And another noun (2/11): ");
var adj1 =  prompt("How about an adjective? (3/11): ");
var adjtime =  prompt("Now give me a unit of time.(4/11): ");
var nounPlace = prompt("And now a 'place' noun. (5/11): ");
var adverb1 = prompt("Next I'll need an adverb. (6/11): ");
var adj2 = prompt("Shoot... I need another adjective...(7/11): ");
var verbING = prompt("Now I need a verb ending in ING. (8/11): ");
var verb1 = prompt("These next two are past-tense verbs: (9/11) verb 1: ");
var verb2 = prompt("and the second verb goes here. (10/11) verb 2: ");
var adj3 = prompt ("Finally, give me a good strong adjective (11/11): ");


var story = "I was in the car going to get " + noun1 + " with my " + noun2 +". \n" +
            "It was a/an " + adj1 + " day and it had felt like \n" +
            adjtime + "s since we had last been to " + nounPlace + ". \n" +
            "After some time, we " +adverb1+ " arrived at our destination. \n" +
            "It was a/an " + adj2 + " building with a "+ verbING + " aura. \n" +
            "A rat " + verb1 + " past us, and " + verb2 + " into something. \n" +
            "It was " + adj3 + "!";

function showStory(){
   document.getElementById("story").innerText = story;
}