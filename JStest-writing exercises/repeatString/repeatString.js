const repeatString = function(stringIn, times) {
    let stringOut = "";
    if (times <0){
        return 'ERROR';
    }
    for (let i=0; i< times; i++){
        stringOut += stringIn;
    }
    return stringOut;
}

module.exports = repeatString
