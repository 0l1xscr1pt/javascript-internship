function printAlphabetReversed(capitelized, reverse) {
    let alphabet = "";
    for (x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        alphabet += String.fromCharCode(x);
    }
    if (alphabet) {
        capitelized = alphabet.toUpperCase();
    }
    if (alphabet) {
        reverse = "";
        for (var i = capitelized.length - 1; i >= 0; i--) {
            reverse += capitelized[i];
        }
        console.log(reverse);
    }
}

printAlphabetReversed();

module.exports = {printAlphabetReversed};
