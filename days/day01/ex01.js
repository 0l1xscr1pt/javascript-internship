let alphabet = "";

function printAlphabet(capitelized) {
    for (x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        alphabet += String.fromCharCode(x);
    }
    if (alphabet){
    capitelized = alphabet.toUpperCase();
        console.log(capitelized)
    }
}
printAlphabet();

module.exports = {printAlphabet};

