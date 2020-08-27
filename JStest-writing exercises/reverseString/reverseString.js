const reverseString = function(stringIn) {
    let stringOut = "";
    let length = stringIn.length - 1
    for (let i = 0; i <= length; i++){
        stringOut += stringIn.charAt(length - i);
    }

    return stringOut;
}

module.exports = reverseString
