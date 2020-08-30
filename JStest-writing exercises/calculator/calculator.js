function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (numbers) {
	let sum = numbers.reduce(function(a, b){
		return a + b;}, 0);
	return sum;
}

function multiply (numbers) {
	return numbers.reduce((a, b) => a * b);
}

function power(a,b) {
	return a ** b;
}

function factorial(a) {
	if (a ===0 || a === 1){
		return 1;
	} else{
	return a * factorial(a-1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}