<?php
//Ouputs the header for the page and opening body tag
function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<!-- Link to external style sheet -->';

    echo '<link rel="stylesheet" type="text/css" href="css/mystyles.css">';
    echo '</head>';
    //echo '<body>';

}
//echo '<body onload="showName() , current_user_name() ">';


/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function outputBannerNavigation($pageName)
{
    /* wrapper div */
    echo '<div id="wrapper">';
    echo '<div id="header"></div>';
    echo '<div id="nav">';
    echo '<ul>';
    echo '<li><a href="index.php">Home</a></li>';
    echo '<li><a href="game.php">Game</a></li>';
    echo '<li><a href="registration.php">Registration</a></li>';
    echo '<li><a href="login.php">Login</a></li>';
    echo '<li><a href="scores.php">Scores</a></li>';
    echo '<li ><a  onclick="logout() , showScoreBoard()" href="">Logout</a></li>';
    echo '<ul>';
    echo '<div class="clear"></div>';
    echo '</div>'; /*end nav */
}

function outputContent()
{
    echo '<div id="content">';
    echo '<div id="main_content">';
}

function outputSideBarsPartOne()
{
    echo '</div>'; /*end content*/
    echo '</div>'; /*end main_content */
    echo '<div id="sidebar_top">';
    echo '<div id="sidebar_background">';
    echo '<img src="images/retro_player.gif">';
    echo '</div>'; /* end sidebar_background */
    echo '</div>'; /* end sidebar top */
    echo ' <div id="sidebar_bottom"><p align="center" id="current_user_name"></p>';
    echo '<div id="sidebar_bottom_extra_information">';
    echo '<div style="color: red; font-size:14px;" id="sidebar_bottom_about_you">';
}
function outputSideBarsPartTwo(){
            echo '</div>'; /*end sidebar_bottom_about_you */
            echo '</div>'; /*end sidebar_bottom_extra_information */
    
            echo '</div>'; /* end sidebar_bottom */
            echo '<div class="clear"></div>';
      
}

//Outputs closing body tag and closing HTML tag
function outputFooter(){
    echo '<div  id="footer"><p id="footer_paragraph"></p></div>'; /* end footer */
    echo '</div>';  /* end wrapper div */
    echo '<script type="text/JavaScript" src="js/home_page.js"></script>';
    echo '<script type="text/JavaScript" src="js/main.js"></script>';
    echo '<script type="text/JavaScript" src="js/login.js"></script>';
    echo '<script type="text/JavaScript" src="js/registration.js"></script>';
    echo '<script type="text/JavaScript" src="js/scores.js"></script>';
    echo '</body>';
    echo '</html>';
}



