$("button").on("click", function(){
	$("div").fadeOut();	//Hide the matched elements by fading them to transparent.
	$("div").fadeIn();	//Display the matched elements by fading them to opaque.
	$("div").fadeToggle();	//Display or hide the matched elements by animating their opacity.
	$("div").slideDown();	//Display the matched elements with a sliding motion.
	$("div").slideUp();		//Hide the matched elements with a sliding motion.
	$("div").slideToggle();	//Display or hide the matched elements with a sliding motion.
});