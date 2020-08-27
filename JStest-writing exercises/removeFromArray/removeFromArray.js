const removeFromArray = function(arrayIn, ...args) {
    
    for (let a = 0; a < args.length; a++){
        let length = arrayIn.length;
        for (let i = 0; i < length; i++){
            if (arrayIn[i] === args[a]){
                arrayIn.splice(i, 1);
            }
        }
    }
    return arrayIn;
}

module.exports = removeFromArray
