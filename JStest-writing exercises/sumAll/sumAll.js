const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number"){
        return 'ERROR';
    }
    let start = Math.min(a,b);
    let finish = Math.max(a,b);
    for (let i = start; i <= finish; i++){
        sum += i;
    }
    return sum;
}

module.exports = sumAll
