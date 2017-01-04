//controlls the sign-in page's appearing and disappearing

//this is in need of a MAJOR cleanup
$(document).ready(function(){

	var a = "Total Height:" + screen.height;
	$("#signIn").css("height", a);

	$(document).on("click", "#logIn", function() {
		$(".grey").css("display", "block");
	});

	$(document).on("click", "#closeCross", function(){
		$(".grey").css("display", "none");
	});

var pageState = 1;

$(document).on("click", "#signUpSelect", function() {

	if(pageState === 1) {

		$("#signUpSheet").css("z-index", "10");
		$("#signInSheet").css("z-index", "2");
		$("#signUpSelect").css("background-color", "#FFF");
		$("#signInSelect").css("background-color", "#CCC");
		$("#signUpSelect:hover").css("pointer", "default");
		pageState = 2;
	}

});

$(document).on("click", "#signInSelect", function() {

	if(pageState === 2) {

		$("#signUpSheet").css("z-index", "2");
		$("#signInSheet").css("z-index", "10");
		$("#signUpSelect").css("background-color", "#CCC");
		$("#signInSelect").css("background-color", "#FFF");
		pageState = 1;
	}

});

});