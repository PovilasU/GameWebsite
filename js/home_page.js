//Show current user name
function showName(){
 if (localStorage.getItem("currentUser") == null)
{
    alert("Hello Guest");
    localStorage.setItem("users", "[]");
    localStorage.setItem("currentUser", "Guest");
    localStorage.setItem("currentPassword", "100percent");
    localStorage.setItem("currentScore", 0);
    localStorage.setItem("currentEmail", "dummyEmail@something.com");
    localStorage.setItem("currentPostCode", 999);
    localStorage.setItem("currentPhoneNumber", 888999);
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
    demo_users();
    demo_users1();
    demo_users2();
    demo_users3();
    demo_users4();
    demo_users5();

}
 else {
 	 }
}

function demo_users() {
    var newUsername = "Yoda";
    var newPassword = "stranger";
    var newScore = "66";
    var newEmail = "mickeyz.mouse@gmail.com";
    var newPostCode = "90th 90P";
    var newPhoneNumber = "079527-2584";
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
function demo_users1() {
    var newUsername = "";
    var newPassword = "strangerz";
    var newScore = "100";
    var newEmail = "duckf.DOnald@gmail.com";
    var newPostCode = "40th 90P";
    var newPhoneNumber = "079527-112";
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
function demo_users2() {
    var newUsername = "Sky Walker";
    var newPassword = "stranger";
    var newScore = "54";
    var newEmail = "sky.walker@gmail.com";
    var newPostCode = "40th 90P";
    var newPhoneNumber = "079527-112";
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

function demo_users4() {
    var newUsername = "JEDI_RALPH";
    var newPassword = "stranger99b";
    var newScore = "99";
    var newEmail = "star.wars233@mdx.com";
    var newPostCode = "90th 90P";
    var newPhoneNumber = "079527-2584";
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
function demo_users3() {
    var newUsername = "R2-D2";
    var newPassword = "stranger";
    var newScore = "15";
    var newEmail = "super1.luigy@gmail.com";
    var newPostCode = "90th 90P";
    var newPhoneNumber = "079527-2584";
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
function demo_users5() {
    var newUsername = "POVILAS";
    var newPassword = "strange77r";
    var newScore = "99";
    var newEmail = "super1.luigssy@gmail.com";
    var newPostCode = "MT9 OP3";
    var newPhoneNumber = "079527-2584";
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

function logout() {
    alert("Bye");
    localStorage.setItem("currentUser", "Guest");
    localStorage.setItem("currentPassword", "100percent");
    localStorage.setItem("currentScore", 0);
    localStorage.setItem("currentEmail", "dummyEmail@something.com");
    localStorage.setItem("currentPostCode", 999);
    localStorage.setItem("currentPhoneNumber", 888999);

}



		