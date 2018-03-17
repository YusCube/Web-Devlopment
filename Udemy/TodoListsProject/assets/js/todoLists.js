//Check off specific todo list
$("ul").on("click", "li", function(){		//click listener will work on the ul only when li is clicked
	$(this).toggleClass("completed");
});

//Delete off specific todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){$(this).remove();});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13 && $(this).val() !== ""){
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " +todo+ "</li>");

	}
});