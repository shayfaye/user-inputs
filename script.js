$(function() {
	//All JS goes within these brackets

	$("#age-submit").click(function(){

		//select the box with id of age
		//get the value from that box
		var ageString = $("#age").val();

		//convert string to number
		var age = parseInt(ageString);

		//check if age is greater than 18
		if (age  >= 18) {

			$("#disney-form").show();
			$("#age-form").hide();
			} else {
			$("#answer").text("Nice try, come back with a better ID.");
			$("#club-img").attr("src", "https://media.tenor.co/images/53d1a55162302c171121136576f77c42/tenor.gif");
		}
	});

	$("#disney-submit").click(function(){
		var disneyMoviesString = $("#disney-movies").val();
		var disneyMovies = parseInt(disneyMoviesString);

		if (disneyMovies > 4 ) {
			$("#disney-form").hide();
			$("#answer").text("Go ahead!");
			$("#club-img").attr("src","https://media.giphy.com/media/3o7aTkzctUbDfzDJ84/giphy.gif");

		} else {
			$("#answer").text("Bye.");
			$("#club-img").attr("src", "https://media.tenor.co/images/53d1a55162302c171121136576f77c42/tenor.gif");
		}
			
	});	
	
});
