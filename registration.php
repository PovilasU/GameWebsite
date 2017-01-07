<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Registration");
    echo '<body onload="showName() , current_user_name()">';
    outputBannerNavigation("Registration");
?>
<?php
    // output main content
    outputContent();
?>

<div id="high_scores"><h1 align="center">Registration</h1></div>

<div  id="registration" styclass='js-fade fade-in' >
    <center>
        <br>
        <form method="POST" name="myRegistrationForm" action="login.php" onsubmit="return checkRegistrationForm(this);">
        <input style="font-size: 16pt"  type="text" name="username" id="usernameInput" placeholder="Username"><br /><br>
        <input style="font-size: 16pt"type="password" name="pwd1" id="passwordInput"   placeholder="Password"><br /><br>
        <input style="font-size: 16pt" type="password" name="pwd2" id="password2Input" placeholder="Confirm Password"><br /><br>
        <input style="font-size: 16pt" type="text" name="email" id="emailInput"  placeholder="E-Mail"><br /><br>
        <input style="font-size: 16pt" type="text" name="phoneNumber" id="phone_numberInput" placeholder="Phone Number"><br /><br>
        <input style="font-size: 16pt" type="text" name="postCode" id="post_codeInput" placeholder="Post Code"><br /><br>
            <p><input style="font-size: 16pt" type="submit"></p>
        </form>
    </center>

</div>

<?php
// output sidebars
outputSideBarsPartOne();
?>
<!-- Side bar content-->
<?php
// output sidebars
outputSideBarsPartTwo();
?>

<?php
    //Output the footer
    outputFooter();
?>
