


//game counters
var winCount = 0;
var lossCount = 0;
totalScore=0;
gameOver= false;

//A win is recorded when players choose from the 4 crystals, which spit out a random number between 1 and 10 and the numbers will need to add up to the random number generated by the master number which is to be between 11 and 60. If they go over, they get a loss. 

$ (document).ready(function(){

	var random = Math.floor(Math.random()*76+24);

	$(".randomNumber").html(random);

	var crystals1= (Math.ceil(Math.random() * 11))+1;
	var crystals2= (Math.ceil(Math.random() * 11))+1;
	var crystals3= (Math.ceil(Math.random() * 11))+1;
	var crystals4= (Math.ceil(Math.random() * 11))+1;
	console.log(random);



function restart(){


	$(".randomNumber").html(random);
random = Math.floor(Math.random()*76+24);
 crystals1= (Math.floor(Math.random() * 11))+1;
 crystals2= (Math.floor(Math.random() * 11))+1;
 crystals3= (Math.floor(Math.random() * 11))+1;
 crystals4= (Math.floor(Math.random() * 11))+1;
 console.log(random);

totalScore=0;
gameOver=false;}



$(".blue").on("click", function() {
	totalScore = totalScore + crystals1;
	$(".score").html(totalScore);
	checkScore();console.log(crystals1);
});






	

$(".red").on("click", function() {
	totalScore = totalScore + crystals2;
	$(".score").html(totalScore);
	checkScore();console.log(crystals2);
});
	

$(".purple").on("click", function() {
	totalScore = totalScore + crystals3;
	$(".score").html(totalScore); 	
	checkScore();
	console.log(crystals3);
});

$(".green").on("click", function() {
	totalScore = totalScore + crystals4;
	$(".score").html(totalScore);
	checkScore();
	console.log(crystals4); });





	function checkScore(){

		if (totalScore === random) {
			gameOver=true;
					restart();
			$(".randomNumber").html(random);
	
		
		} 

 if (totalScore > random) {
 				gameOver=true;
			 restart();		
		$(".randomNumber").html(random);


		}
	}
});













