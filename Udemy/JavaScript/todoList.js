window.setTimeout(function() {	//Enabling HTML to load before JS
  var todos = [];
  var input = prompt("What would you like todo...?");
  while(input !== "quit")
  {
  	switch(input)
 	{
  		case "list" : 
      console.log("**********");
      todos.forEach(function(todo, i){
        console.log(i+". "+todo);
      });
      console.log("**********");
      break;
  		
      case "new" : 
      var ip = prompt("Enter new todo:");
      todos.push(ip);
      console.log(ip+" add to Todos List.");
      break;
      
      case "delete": 
      todos.splice((Number(prompt("Enter the todo index"))), 1); 
      console.log("Deleted Todo!")
      break;
  		
      default: alert("Incorrect input!!!");
  	}
  	input = prompt("What would you like todo...?");
  }
  console.log("Ok, You quit the app!!!");
  
}, 500);