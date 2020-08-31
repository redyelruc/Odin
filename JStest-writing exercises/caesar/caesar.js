const caesar = function(textIn, cypher) {
    let encrypted = "";
    for  (let i = 0; i < textIn.length; i++){
        encrypted = encrypted + encrypt(textIn.charCodeAt(i), cypher)
    }
    return encrypted;
}


function encrypt(ascii, cypher){
    let encrypted = "";
    // if between A and Z
    if (ascii >=65 && ascii <= 90){
        let encryptedAscii = ascii + cypher;
        // if encrypted letter strays from the boundaries of the alphabet
        while (encryptedAscii > 90){
            encryptedAscii -= 26;
        }
        while (encryptedAscii < 65){
            encryptedAscii += 26;
        }
        encrypted = String.fromCharCode(encryptedAscii);
        // if between a and z
    } else if (ascii >= 97 && ascii <= 122){
        let encryptedAscii = ascii + cypher;
        // if encrypted letter strays from the boundaries of the alphabet
        while (encryptedAscii > 122){
            encryptedAscii -= 26;
        }
        while (encryptedAscii < 97){
            encryptedAscii += 26;
        }
        encrypted = String.fromCharCode(encryptedAscii);
        // if not a letter of the alphabet
    } else {
        encrypted = String.fromCharCode(ascii);
    } 
    return encrypted;  
}  
    
module.exports = caesar
