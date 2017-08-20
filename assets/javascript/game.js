// $("randomNumber").text(targetNumber);

// var counter = 0;
// var increment = numberOptions[Math.round(Math.random())];

// $(".crystal-image").on("click", function() {

//music autoloop on document load
$(document).ready(function() {
    $("#02-kokiri").get(0).play();
});
var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];

function reset() {

}	
/*random number generator*/
$('#button').on('click', function generate() {
  $('#number').text(Math.floor(Math.random() * 10) + 1);
  console.log()
});