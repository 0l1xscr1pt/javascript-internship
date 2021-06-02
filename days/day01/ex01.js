function printAlphabet(capitelized) {
    let alphabet = "";
    for (x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        alphabet += String.fromCharCode(x);
    }
    if (capitelized === true) {
        capitelized = alphabet.toUpperCase();
        console.log(capitelized);
    } else {
        console.log(alphabet);
    }
}

module.exports = {printAlphabet};

