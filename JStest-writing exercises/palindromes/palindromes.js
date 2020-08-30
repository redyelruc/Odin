const palindromes = function(word) {
    let allText = word.replace(/[^a-z0-9+]+/gi, '').toUpperCase();
    let length = allText.length;
    for (let i = 0; i < length; i++){
        if (allText.charAt(i) !== allText.charAt(length - 1 - i)){
            return false;
        }
    }
    return true;
}

module.exports = palindromes
