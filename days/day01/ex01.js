function printAlphabet(capitelized) {
    let alphabet = "";
    for (x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        alphabet += String.fromCharCode(x);
    }
    if (alphabet) {
        capitelized = alphabet.toUpperCase();
        console.log(capitelized);
    }
}

module.exports = {printAlphabet};

