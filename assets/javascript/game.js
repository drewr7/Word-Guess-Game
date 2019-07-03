// Create list of teams 
var teams = ['texans','cowboys','saints','dolphins','buccaneers','falcons','panthers','titans','chiefs','redskins','vikings','jaguars','packers','colts','lions','rams','chargers','broncos','browns','bengals','bears','bills','ravens','patriots','giants','jets','raiders','eagles','steelers'];
//Choose team randomly
var randnum = Math.floor(Math.random()* teams.length);
var choosenteam = teams[randnum];
var underscore = [];
var rightword = [];
var wrongword = [];

//Create underscores based on team selected
var generateunderscore = function() {
    for(i=0; i < choosenteam.length; i++){
        underscore.push('_');
    }
    return underscore;
} 

console.log(generateunderscore());
//Get users guess
document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
// if user guess is correct
    if(choosenteam.indexOf(keyword) > -1) {
    rightword.push(keyword);
    console.log(rightword);
    }
    else{
    wrongword.push(keyword);
    console.log(wrongword)
    }
})
//Check if guess is right

//If right replace letter with underscore

//If wrong add to letters guessed 