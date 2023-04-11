// recursive function that searches value in an array 

	let arr = [5, 10, 22, 15, 20];
	let n = arr.length;
	let SearchValue = 20;
	let index = recFunction(arr, 0, n - 1, SearchValue);

	if (index != -1){
	console.log(`${SearchValue} is present at index ${index}`);
	}
	else{
		console.log(`${SearchValue} is not present`);
        
	}

// Recursive function 
function recFunction(arr,a, b, val)
{
	if (b < a)
		return -1;
	if (arr[a] == val)
		return a;
	if (arr[b] == val)
		return b;
	return recFunction(arr, a+1, b-1, val);
}	

