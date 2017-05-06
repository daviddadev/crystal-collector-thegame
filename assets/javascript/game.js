//globle variables
var wins = 0;
var losses = 0;

//players currunt score
var addition = 0;

//selects a random number from 19 t0 120
var total = Math.floor((Math.random()* 100) + 19);

//assigns random value to crystals from 1-12

var img1 = Math.floor((Math.random()* 12) + 1);

var img2 = Math.floor((Math.random()* 12) + 1);

var img3 = Math.floor((Math.random()* 12) + 1);

var img4 = Math.floor((Math.random()* 12) + 1);


//restart function
var restart = function(){
	addition = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('#total-score').empty();

	$('#total-score').append(total);