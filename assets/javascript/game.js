// Create list of teams
var teams = ['texans','dolphins','falcons','panthers','chiefs','packers','colts','lions','rams','browns','bengals','bears','ravens','giants','jets'];
var underscore = [];
var rightword = [];
var lettersguessed = [];
var guessesremaining = 9;
var docunderscore = document.getElementsByClassName('underscore');
var doclettersguessed = document.getElementById('lettersguessed');
var docrightguess = console.log

//Choose team randomly
var randnum = Math.floor(Math.random()* teams.length);
var choosenteam = teams[randnum];

//Create underscores based on team selected
var generateunderscore = function() {
for(i=0; i < choosenteam.length; i++){
underscore.push('_');
}
return underscore;
}

//Get users guess
document.addEventListener('keypress', (event) => {
var keycode = event.keyCode;
var keyword = String.fromCharCode(keycode);


// if user guess is correct
if (choosenteam.indexOf(keyword) > -1) {
rightword.push(keyword);
docunderscore.innerHTML = underscore.join(' ');

// replace underscore with right letter
underscore[choosenteam.indexOf(keyword)] = keyword;
docunderscore[0].innerHTML = underscore.join(' ');
}
// checks to see if word matches guesses
else if(underscore.join('') == choosenteam) {
alert('You Win!');

}

else if (guessesremaining == 1) {
    alert('Game Over');
}

else{
lettersguessed.push(keyword);
doclettersguessed.innerHTML = lettersguessed.join(' ');
guessesremaining--;
}
//display guesses remaining
document.getElementById("guessesleft").innerHTML = " " + guessesremaining;

})

docunderscore[0].innerHTML = generateunderscore().join(' ');
