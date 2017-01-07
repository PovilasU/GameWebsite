// Checking if email and password maches
function logIn(){   
	var emailInput = document.getElementById("emailInput").value; 
	var passwordInput = document.getElementById("passwordInput").value;  
	if (localStorage.getItem(emailInput) === null) {
		window.alert("Wrong E-mail");
	}
	if (localStorage.getItem(emailInput) != passwordInput) {
		window.alert("Wrong password");
	}
	if (localStorage.getItem(emailInput) == passwordInput) {
    	//find user's name
		alert("looking for user name");
    	var myUsers = localStorage.getItem("users");
    	var myUsersJSArray = JSON.parse(myUsers);
    	for (i = 0; i < myUsersJSArray.length; i++) { 
    		if (myUsersJSArray[i].email == emailInput ) {
    			window.alert("Login succesful!!");
    			alert("Hello " + myUsersJSArray[i].username );
				localStorage.setItem("currentEmail", emailInput);
				localStorage.setItem("currentUser", myUsersJSArray[i].username);
    			document.getElementById("current_user_name").innerHTML ="Current User: "+  myUsersJSArray[i].username;
				localStorage.setItem("currentScore", 0);
				setCurrentUser();
				infoAboutUser();



			}

    	}



    }
}

//set current User
function setCurrentUser() {
	// var emailInput = document.getElementById("emailInput").value;
	//find user's name
	var myUsers = localStorage.getItem("users");
	var myUsersJSArray = JSON.parse(myUsers);
	for (i = 0; i < myUsersJSArray.length; i++) {
		if (myUsersJSArray[i].email == localStorage.getItem("currentUser")  ) {
		document.getElementById("current_user_name").innerHTML =  myUsersJSArray[i].username;
			}

	}
	
	// localStorage.setItem("currentUser", emailInput);
}




function infoAboutUser(){
	var myUsers = localStorage.getItem("users");
	var myUsersJSArray = JSON.parse(myUsers);	
	for (i = 0; i < myUsersJSArray.length; i++) { 
		if (myUsersJSArray[i].email == localStorage.getItem("currentEmail")  ) {
		document.getElementById("sidebar_bottom_about_you").innerHTML ="<br>"+"<br>"+
		"name: "+myUsersJSArray[i].username + "<br>" + "phone number: " +  myUsersJSArray[i].phoneNumber +"<br>"+
		"E-mail: " + myUsersJSArray[i].email +   "<br>" + "post Code: " + myUsersJSArray[i].postCode;

		}
	}
	
}



