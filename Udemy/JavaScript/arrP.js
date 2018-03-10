//Print Array in Reverse
function printReverse(a){
	while (a.length !== 0)
	{
		console.log(a.pop());
	}
}

//Check whether arrays are same or not
function isUniform(a){
	var temp = a[0];
	for(var i = 1; i < a.length; i++){
		if(temp !== a[i]){
			return false;
		}
	}
	return true;
}

//Return sum of array
function sumArray(a){
	var sum = 0;
	a.forEach(function(e){
		sum+=e;
	});
	return sum;
}

//Returns max element of the array
function max(a){
	var max = 0;
	a.forEach(function(e){
		if(max < e)
			max = e;
	});
	return max;
}