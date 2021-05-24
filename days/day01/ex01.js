let alphabet = "";

function printAlphabet(capitelized) {
    for (x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        alphabet += String.fromCharCode(x);
    }
    if (alphabet){
    capitelized = alphabet.toUpperCase();
    return capitelized;
    }
}

console.log(printAlphabet(alphabet));
module.exports = {printAlphabet};

