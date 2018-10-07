function getMaxSubSum(arr) {
	let compare = 0;
	for (let i = 0; i < arr.length; i++) {
		let sum = 0;
		for (let j = i; j < arr.length; j++) {
			sum += arr[j];
			if (compare < sum) {
			compare = sum;
		}
		}
		
		
		sum = 0;
	}
	return compare;
}

function getMaxSubSum(arr) {
	let maxSum = 0;
	let partialSum = 0;
	for(let item of arr) {
		partialSum += item;
		maxSum = Math.max(maxSum,partialSum);
		if (partialSum < 0) partialSum = 0;
	}
	return maxSum;
}