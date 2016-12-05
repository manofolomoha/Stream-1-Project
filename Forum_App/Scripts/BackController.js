$(document).ready(function(){
	$(document).on("click", "#backButton", function(){
			console.log("Clicked");
		    window.history.back();
	});

});