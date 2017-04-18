$(document).ready(function() {
	//All JS goes within these brackets

	$("#age-submit").click(function(){

		//select the box with id of age
		//get the value from that box
		var ageString = $("#age").val();

		//convert string to number
		var age = parseInt(ageString);

		//check if age is greater than 18
		if (age  >= 18) {
			$("#answer").text("Come on in!")
			$("#club-img").attr("src","http://cdn2.teen.com/wp-content/uploads/2013/09/rihanna-dance.gif")
			} else {
			$("#answer").text("Nice try, come back with a better ID.");
			$("#club-img").attr("src", "https://media.tenor.co/images/53d1a55162302c171121136576f77c42/tenor.gif");
		}
	});	
	
});
