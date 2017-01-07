<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Home");
    echo '<body onload="showName() , current_user_name()">';
    outputBannerNavigation("Home");
?>

<?php
    // output main content
    outputContent();
?>
    <!-- Contents of the page -->
    <div id="inside_main_content">
        When evil alien invaders attack, it's up to you to defend the planet.
        Fight off hoards of alien forces before they reach the surface.
        Only with your help, can the aliens be repelled. You must stop the Space Invaders!<br />
        <br>
        <br>
        This site was created by Middlesex University Computer Science student
        Povilas Urbonas as a second year course work. <br>
        Module: Web Applications and Databases.
    </div><!-- end inside_main_content -->


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