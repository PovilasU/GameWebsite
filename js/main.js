/**
 * Created by admin on 14/12/2016.
 */
// set current user name
function current_user_name() {
    document.getElementById("current_user_name").innerHTML = "Current User: " + localStorage.getItem("currentUser");
    document.getElementById("footer_paragraph").innerHTML = "";
    
}



