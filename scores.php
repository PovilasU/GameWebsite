<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Score board");
    echo '<body onload="showScoreBoard(), current_user_name() ">';
    outputBannerNavigation("Login");
?>
<!--<body onload="showScoreBoard() ">-->
<?php
    // output main content
    outputContent();
?>
    <!-- Contents of the page -->
<div id="high_scores">
    <p><br></p>
    <h1  align="center">TOP 10 HIGH SCORES</h1>
    <p align="center" id="score_table"></p>
</div><!-- end high_scores -->
<?php
// output sidebars
outputSideBarsPartOne();
?>
<!-- Side bar content-->
<iframe width="250" height="170"
        src="https://www.youtube.com/embed/8teuyCYeDxQ?autoplay=1">
</iframe>

<?php
// output sidebars
outputSideBarsPartTwo();
?>


<?php
    //Output the footer
    outputFooter();
?>
