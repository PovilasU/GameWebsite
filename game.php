<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Game");
    echo '<body onload="showName() , current_user_name() ">';
    outputBannerNavigation("Game");

?>

<?php
    // output main content
    outputContent();
?>
<!-- Contents of the page -->
<iframe src="game/space_invaders.html" width="680" height="550"></iframe>

<?php
// output sidebars
outputSideBarsPartOne();
?>
<!-- Side bar content-->
<br>

<div id="extra_content" style="color: white; font-size: 16px;">

<!--<p style="font-size: 16px">Game Control</p>-->
<p style="color: #90bd6d;">LeftArrow moves to the left  </p>
    <br>
<p style="color: #90bd6d">RightArrow moves to the right </p>
    <br>
<p style="color: #90bd6d">Space for shooting</p>
</div><!-- end extra_content-->

<?php
// output sidebars
outputSideBarsPartTwo();
?>

<?php
    //Output the footer
    outputFooter();
?>
