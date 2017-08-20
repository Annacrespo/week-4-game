// $("randomNumber").text(targetNumber);

// var counter = 0;
// var increment = numberOptions[Math.round(Math.random())];

// $(".crystal-image").on("click", function() {

//music autoloop on document load

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

// $(document).ready(function() {

//       // When random-button is clicked...
//       $("#rupee1").on("click", function() {

//         // Create a string which will hold the lottery number
//         var lottoNumber = "";

//         // Then initiate a loop to generate 9 separate numbers
//         for (var i = 0; i < 9; i++) {

//           // For each iteration, generate a new random number between 1 and 9.
//           var random = Math.floor(Math.random() * 9) + 1;

//           // Take this number and then add it to the rest of the string.
//           // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
//           lottoNumber = random + lottoNumber;

//         }