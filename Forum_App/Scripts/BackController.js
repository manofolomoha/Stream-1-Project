$(document).ready(function(){
	$("#contentBox").on("click", "#backButton", function(){
			console.log("Clicked");
		    window.history.back();
	});

});