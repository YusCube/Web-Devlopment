//Check whether given number is Even 
function isEven(num){
	return num%2 === 0;
}

//FInd factorial of Number
function factorial(num){
	var fact = 1;
	for (var i = 2; i<=num; i++)
		fact*=i;
	return fact;
}

//Convert kebab-case to snake_case
function kebabToSnake(str){
	str = str.replace(/-/g, "_");
	return str;
}

console.log(isEven(42));
console.log(factorial(5));
console.log(kebabToSnake("kebab-case-lmao"));