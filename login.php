<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Login");
     echo '<body onload="showName() , current_user_name() ">';
    outputBannerNavigation("Login");
?>

<?php
    // output main content
    outputContent();
?>
    <!-- Contents of the page -->
<div style="margin: 100px;" id="login">
    <h1 style="margin: 0px" align="center">Login</h1>
</div>
    <div  id="inside_main_content_login" >
        <!-- Login form -->
        <div class='js-fade fade-in' >
            <center>
                <input style="font-size: 16pt" type="text" id="emailInput" placeholder="E-Mail"><br /><br>
                <input style="font-size: 16pt" type="password" id="passwordInput" placeholder="Password"><br /> <br>
                <button style="font-size: 16pt" onclick="logIn()">Login</button>

            </center>
        </div>
    </div> <!-- end login_content-->

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