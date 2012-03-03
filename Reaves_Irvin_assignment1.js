// Hello World!
// Author: Irvin Reaves
// Created for: SDI Online Assignment 1


var GolfCourse = 	'Pi\'s Golf Course', 
	TeeTime = 		true,
	FirstHole = 	523,
	Driver = 		275,
	FiveIron =		185,
	SandWedge = 	62,
	FirstPutt	=	FirstHole - Driver - FiveIron - SandWedge,
	FairWay = 		"Short Grass",
	Rough = 		"Tall Uncut Grass",
	SandTrap = 		"Bunker Full of Sand",
	FirstShot =		FirstHole - Driver,
	SecondShot = 	FirstHole - Driver - FiveIron,
	ThirdShot = 	FirstHole - Driver - FiveIron - SandWedge
;

if (TeeTime === true) {
	console.log(GolfCourse + " Swing away 1st hole 523 yard par 5.");
	} else {
		console.log("Wait for tee time");
	};
	if (FirstHole >= 250) {
		console.log("Tee off with the Driver.");
	} else { 
		console.log("Tee off with a different club.");
	};	
	if (FirstShot = FirstHole - Driver + " yards to hold, Great tee shot 275 yards straight down the middle of the fairway. ") {
		console.log(FirstShot);
	} else {
		console.log("Select a different club.");
	};
	if (SecondShot = FirstHole - Driver - FiveIron + " yards to hold, 185 yard 5 iron that found the right front bunker. ") {
		console.log(SecondShot);
	} else {
		console.log("Select a different club.");
	};
	if (ThirdShot = FirstHole - Driver - FiveIron - SandWedge + " foot putt for birdie, solid sand shot.") {
		console.log(ThirdShot);
	} else {
		console.log("Select a different club.");
	};
	if (FirstPutt = FirstHole - Driver - FiveIron - SandWedge - 1 + " Great birdie putt, your -1 for the 1st hole.") {
		console.log(FirstPutt);
	} else {
		console.log("Putt again.");	  
						
};






