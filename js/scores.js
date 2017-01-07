//save scores
function saveScores(){
    alert("Your scores has been saved");
    var newUsername = localStorage.getItem("currentUser");
    var newPassword = localStorage.getItem("currentPassword");
    var newScore = localStorage.getItem("currentScore");
    var newEmail = localStorage.getItem("currentEmail");
    var newPostCode = localStorage.getItem("currentPostCode");
    var newPhoneNumber = localStorage.getItem("currentPhoneNumber");
    // create new user
    var newUser = {username: newUsername, password: newPassword,
        score: newScore, email: newEmail, phoneNumber: newPhoneNumber,
        postCode: newPostCode};
    var storedUsers = localStorage.getItem("users");
    // create JS object (array)
    var storedUsersArray = JSON.parse(storedUsers);
    // add new user
    storedUsersArray.push(newUser);
    // create JSON object
    var jsonObj = JSON.stringify(storedUsersArray);
    // store LS
    localStorage.setItem("users", jsonObj);
    var myUsers = localStorage.getItem("users");
    var myUsersJSArray = JSON.parse(myUsers);
}


// Print scores
function showScoreBoard(){                 
var myUsers = localStorage.getItem("users");
var myUsersJSArray = JSON.parse(myUsers);
var players = [];
for (i = 0; i < myUsersJSArray.length; i++) { 
players.push([myUsersJSArray[i].username , myUsersJSArray[i].score]);
}

//Sort scores 
players.sort(sortfunc);

function sortfunc(a,b){
  return b[1] - a[1];
}

//Create score table
var scoreTable= "<table><tr><td style='width: 100px; color: red;'>Place</td>";
scoreTable+= "<td style='width: 100px; color: red; text-align: right;'>Player name</td>"; 
scoreTable+= "<td style='width: 100px; color: red; text-align: right;'>Score</td>";   
scoreTable+="<tr><td style='width: 100px;color: red  '>---------------</td>";
scoreTable+="<td     style='width: 100px; color: red; text-align: right;'>---------------</td>";
scoreTable+="<td     style='width: 100px;color: red; text-align: right;'>---------------</td>";
for (i = 1; i < players.length; i++) {
    if (i<11) {
        
            scoreTable += "<tr><td style='width: 100px;color: red;'> " + i + "</td>";
            scoreTable += "<td style='width: 100px;color: red; text-align: right;'>" + players[i][0] + "</td>";
            scoreTable += "<td style='width: 100px;color: red; text-align: right;'>" + players[i][1] + "</td>";

    }
    else document.getElementById("score_table").innerHTML = scoreTable;
}
scoreTable+="</table>";
document.getElementById("score_table").innerHTML = scoreTable;
}



//Clears local storage
function clearStorage(){
 localStorage.clear();
}

//Clears local storage
function showUsers(){
 alert(localStorage.getItem("users"));
}

