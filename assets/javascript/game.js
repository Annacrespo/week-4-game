var playerNum = [];
var intArr = [];
var arrSum = 0;
var wins = 0;
var losses = 10;
var number = 0;
$('#arrSum').text(arrSum);
$('#number').text(number);

/*Generate a random number for the player to guess*/
$('#button').on('click', function generate() {
    $('#number').text(Math.floor(Math.random() * 100) + 1);
    let number = document.getElementById('number').innerText;
    console.log(number)
});

$('#reset').on('click', function reset() {
    $('#arrSum').text(arrSum);
    $('#number').text(number);
    location.reload();
})

// When each rupee is clicked it will generate a random number between certain numer space(ex: 1-10)
// It also executes a function that then gets the number and saves it in a variable to be used when adding up the player score

//Rupee one
$('#rupee1').on('click', function generate() {
    $('#rupee1random').text(Math.floor(Math.random() * (20 - 1 + 1) + 1));
});
$('#rupee1').on('click', function add() {
    let rup1 = document.getElementById('rupee1random').innerText;
    playerNum.push(rup1);
    allCheck();
});

// Rupee two
$('#rupee2').on('click', function generate() {
    $('#rupee2random').text(Math.floor(Math.random() * (20 - 1 + 1) + 1));
});
$('#rupee2').on('click', function add() {
    let rup2 = document.getElementById('rupee2random').innerText;
    playerNum.push(rup2);
    allCheck();
});

// Rupee three
$('#rupee3').on('click', function generate() {
    $('#rupee3random').text(Math.floor(Math.random() * (20 - 1 + 1) + 1));
});
$('#rupee3').on('click', function add() {
    let rup3 = document.getElementById('rupee3random').innerText;
    playerNum.push(rup3);
    allCheck();
});

//Rupee four
$('#rupee4').on('click', function generate() {
    $('#rupee4random').text(Math.floor(Math.random() * (20 - 1 + 1) + 1));
});
$('#rupee4').on('click', function add() {
    let rup4 = document.getElementById('rupee4random').innerText;
    playerNum.push(rup4);
    allCheck();
});

// the all check function converts all strings to ints, adds the player score up, pushes it to the html and checks if 
//the player has gone over or won the game
let allCheck = function() {
    for (var i = 0; i < playerNum.length; i++) {
        intArr.push(parseInt(playerNum[i]))
    };
    var arrSum = intArr.reduce((a, b) => a + b, 0);
    var arrStringSum = arrSum.toString();

    $('#arrSum').text(arrSum);
    let number = document.getElementById('number').innerText;
    if (arrSum === number) {
        wins++;
        $("#wins").append('<img src="assets/images/green-rupee-win.png" alt="green-rupee" style="width:50px;">');
        alert("You win!");
    } else if (arrSum > number) {
        losses--;
        $('#lives img:last').remove();
        alert("You lose!");

        if (losses < 1) {
            location.reload();
            alert('Sorry you have lost all of your lives please restart the game');

        }
    }

}