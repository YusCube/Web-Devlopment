var butn = document.querySelector("button");

//Method 1
butn.addEventListener("click", function(){
	if (document.body.style.background === "white")
	{
		document.body.style.background = "purple";
	}
	else
		document.body.style.background = "white";
});

//Method 2
butn.addEventListener("click", function(){
	document.body.style.classList.toggle("purple");
});