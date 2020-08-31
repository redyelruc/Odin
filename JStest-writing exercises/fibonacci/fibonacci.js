const fibonacci = function(x) {
    // cannot accept negatives
    if (x < 0){
        return "OOPS";
    }
    // changes strings to a number
    if (typeof x === 'string'){
        x = Number(x);
    }
    // base case
    if (x==1 || x == 2){
        return 1;
    } else return fibonacci(x-1) + fibonacci(x-2); //recursion
}

module.exports = fibonacci
