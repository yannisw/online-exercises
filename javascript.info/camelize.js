function camelize(str) {
	let arr = str.split("-");
	for (let i = 1; i < arr.length; i++) {
		let word = arr[i];
		arr[i] = word[0].toUpperCase() + word.slice(1);
	}
	return arr.join("");
}

function camelize(str) {
	return str.split("-").map((word,index)=>index==0?word:word[0].toUpperCase()+word.slice(1)).join("");
}