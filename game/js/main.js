// variables

var usersObj = []; // users database
var userScore = "currentUserScore";
var clicks = 0;

function showScores() {
    //	alert(localStorage.getItem("users"));
    players_scores = localStorage.getItem("users");
    document.getElementById("score_board").innerHTML = players_scores;
    var usersScoresObj = [];
    usersScoresObj.push(players_scores);
    var usersScoresStr = JSON.stringify(usersScoresObj);
    document.getElementById("score_board").innerHTML = usersScoresStr;
}









