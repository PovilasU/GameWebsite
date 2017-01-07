/* sounds */
var hitSound = new Audio();
function playEffectShoot()
{
    hitSound = document.getElementById('shoot'); 
    hitSound.currentTime = 0;
    hitSound.play();    
}

function playEffectSoundExplosion()
{
    hitSound = document.getElementById('explosion');
    hitSound.currentTime = 0;
    hitSound.play();    
}

/* Game code */

var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var SPACE_KEY = 32; //shooting key
var HERO_MOVEMENT = 8; //hero movement speed
var lastLoopRun = 0;
var score = 0;
var iterations = 0; // to track how many times game loop run
var level = 1;
var lives = 3;



var controller = new Object();
var enemies = new Array(); //list of enemies have on the screen
var levelSpeed = 0; 

function createSprite(element,x,y,w,h){
	var result = new Object();
	result.element = element;
	result.x=x;
	result.y=y;
	result.w=w;
	result.h=h;
	return result;
}

	/*Defining key controler function whis allows to control hero through the actions of this controller*/
	/*When LEFT_KEY is pressed it sets controller.left property to true,
	 when LEFT_KEY is released it sets controller.left property to false and so on*/
	function toggleKey(keyCode, isPressed /*boolean argument*/ ) {
	 /* console.log(keyCode); this function is very usefull it allows to check which key is pressed 
	and gives the keyCode in console log (debug tools)*/
	if (keyCode == LEFT_KEY){
		controller.left = isPressed;
	  }
	  if (keyCode ==RIGHT_KEY){
	  	controller.right = isPressed;
	  }
	  if (keyCode == SPACE_KEY){
	  	controller.space = isPressed;
	 playEffectShoot();
	  }

	}

	/*tells if two objects intersects*/
	function intersects (a, b){
		return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h >  b.y;
	}

	function ensureBounds(sprite,ignoreY){ //setting bouding area  the sprites
		if (sprite.x < 20){
			sprite.x = 20; // this stops from going outside our frame left side 
		}
		if(!ignoreY && sprite.y < 20){
			sprite.y = 20; // this stops from going outside our frame height
		}
		if(sprite.x + sprite.w > 480){
			sprite.x = 480 - sprite.w; //sets sprite position little bit left from the right side
		}
		if(!ignoreY && sprite.y+sprite.h > 480) {
			sprite.y = 480 - sprite.h; //sets sprite position  above bottom
		}
	}



	/*defining function*/
	function setPosition(sprite){
		/*creating sprite objects*/
		var e = document.getElementById(sprite.element); /*sprite object has element property, 
		element property is going to tell where to find the particular div or  htlm element on the page*/

		/*telling to browser where to put this*/
		e.style.left = sprite.x + 'px';/*pixels from the left of the screen*/
		e.style.top = sprite.y + 'px';/*pixels from the top of the screen*/
	}
	/*defining hero ends*/

		/*Hande control function*/
	function handleControls(){
		if (controller.left){
			hero.x = hero.x - HERO_MOVEMENT; // moves hero postition to the  left 5 pixels
		}
		if (controller.right) {
			hero.x = hero.x + HERO_MOVEMENT; // moves hero position to the right 5 pixels
		}
		if (controller.left){
			heroGun.x = heroGun.x - HERO_MOVEMENT; // moves hero postition to the  left 5 pixels
		}
		if (controller.right) {
			heroGun.x = heroGun.x + HERO_MOVEMENT; // moves hero position to the right 5 pixels
		}
		/*Controling laser position*/
		if (controller.space && laser.y <= -130){ // interval between shootings
			laser.x = hero.x + 9;
			laser.y = hero.y - (laser.h-40); //seting position of laser how far away from hero appears when space key is pressed
		}

		ensureBounds(hero);
	}

	function checkCollisions() {
		for (var i = 0; i < enemies.length; i++) {
			/*when laser hits enemy remove enemy from array*/
			if (intersects(laser, enemies[i])) {
				var element = document.getElementById(enemies[i].element);
				element.style.visibility = 'hidden';
				element.parentNode.removeChild(element);
				enemies.splice(i, 1);
				i = i - 1;
				/*when laser hits enemy it removes laser from the screen*/
				laser.y = -laser.h;
				/*when target is hit by laser add 1 to score*/
				score = score + 1;
				/* save scores to local storage */			             
	           	localStorage.setItem(userScore, score);
	           	// play sound test
	          	 playEffectSoundExplosion();
				localStorage.setItem("currentScore", score);

				/*checks if hero was hit*/			
			} else if (intersects(hero, enemies[i])){	
				lives = lives -1;
				enemies[i].y =0;
				enemies[i].h =0;
				playEffectSoundExplosion();
				gameOver();// call function gameOver

			/*Prevens enemies from falling  of the bottom*/
			} else if (enemies[i].y + enemies[i].h >= 500) {
				var element = document.getElementById(enemies[i].element);
				element.style.visibility = 'hidden';
				element.parentNode.removeChild(element);
				enemies.splice(i, 1);
				i = i - 1;
			}
		}
	}

	/*Function Game Over*/
	function gameOver(){
		if(lives <= 0){
		var element = document.getElementById(hero.element);
		element.style.visibility = 'hidden';
		element = document.getElementById('gameover');
		element.style.visibility= 'visible';
		lives=0;
		if (score < 100){
		element = document.getElementById('background');
		element.style.background= "url('./images/earth.gif') no-repeat";
	}
	}

	}

	function showSprites (){ // a bit information from wikipedia about sprites: sprite is a two-dimensional bitmap that is integrated into a larger scene
		setPosition(hero);
		setPosition(laser);
		/*update enemies*/
		for (var i = 0; i < enemies.length; i++){
			setPosition(enemies[i]);
		}
		var scoreElement = document.getElementById('score');
		scoreElement.innerHTML = 'scores:' + score;
		var levelElement = document.getElementById('level');
		levelElement.innerHTML = 'level:' + level;
		
		var livesElement = document.getElementById('lives');
		livesElement.innerHTML = 'lives:' + lives;
		
	}

		/*function to update positions where player don't have direct control (laser)*/
	function updatePositions(){
		for (var i=0; i < enemies.length; i++){
			enemies[i].y = enemies[i].y + 4;
			enemies[i].x = enemies[i].x + (getRandom(7) - 3 ); // enemy will move between -3 and +3
			ensureBounds(enemies[i], true); //when reach botom stops
		}
		laser.y-= 20;
	}


	/* randomly inserts enemy every 2 secons*/
	function addEnemy(levelSpeed, $enemyDiv){ 
		var interval = levelSpeed; // every 100 times (around 4 seconds) add new enemy
		if (getRandom(interval) ==0){
			var elementName = 'enemy' + getRandom(100000000/2);
			var enemy = createSprite(elementName, getRandom(450),-40,35,35);
			var element = document.createElement('div');
			element.id = enemy.element;
			element.className = $enemyDiv;
			document.children[0].appendChild(element);
			enemies[enemies.length] = enemy;
		}

	}





	function getRandom(maxSize){
		return parseInt(Math.random() * maxSize);
	}


		/*This function will run all actions of the game*/
	function loop(){
		
		if (new Date().getTime() - lastLoopRun > 40){
			updatePositions();
			handleControls();
			checkCollisions();

			showSprites();
		// incresing game speed evey upper level
		if (score > 5 && lives !=0) {
			levelSpeed = 15; 
			var $enemyDiv = 'enemyLevelThree';
			level=3;
			element = document.getElementById('background');
		    element.style.background= "url('./images/sfera.gif') no-repeat";
			// clear level

		}else if (score > 1 && lives !=0){
			levelSpeed = 25;
			var $enemyDiv = 'enemyLevelTwo';
			level=2;

		    element = document.getElementById('background');
		    element.style.background= "url('./images/dance.gif') no-repeat";
	
		}else if (score >= 0 && lives !=0){
			levelSpeed = 100;
			var $enemyDiv = 'enemy';
		}


			addEnemy(levelSpeed , $enemyDiv);


			lastLoopRun = new Date().getTime();//resets lastLoopRun every 40 ms
			iterations=iterations + 1; //adding 1 to var iteration after each loop
		}
		setTimeout('loop();', 2); /*allows to call function later ( every 2 ms )*/

	}


	/*get event when key is pressed*/
	document.onkeydown = function(evt) {
		toggleKey(evt.keyCode, true);
	};	

	/*get event when key is released*/
	document.onkeyup=function (evt) {
		toggleKey(evt.keyCode, false);
	};

	/*Creating hero sprite*/
var hero = createSprite('hero',250,460,20,20);
/*Creating laser sprite*/
var laser = createSprite ('laser',0,-120,2,50);


	loop();

/* Game code ends */
// fade in effect
var el = document.querySelector('.js-fade');
if (el.classList.contains('is-paused')){
  el.classList.remove('is-paused');
}







function saveScores(){
	alert("Your scores has been saved");
	var newScore = localStorage.getItem("currentScore");
	var newEmail = localStorage.getItem("currentEmail");
	var storedUsers = localStorage.users;
	// create JS object (array)
	var storedUsersArray = JSON.parse(storedUsers);
	// update score
	for (var i = 0; i < storedUsersArray.length; i++) {

		if ( storedUsersArray[i].email === newEmail) {
			storedUsersArray[i].score = (storedUsersArray[i].score < newScore)?newScore : storedUsersArray[i].score;
		}
	}
	// create JSON object
	var jsonObj = JSON.stringify(storedUsersArray);
	// store LS
	localStorage.setItem("users", jsonObj);

}