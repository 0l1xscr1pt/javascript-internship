function printAlphabetReversed(capitelized, reverse) {
    let alphabet = "";
    for (x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        alphabet += String.fromCharCode(x);
    }
    if (capitelized === true) {
        capitelized = alphabet.toUpperCase();
    } else {
        console.log(alphabet);
    }
    if (reverse === true) {
        reverse = "";
        for (var i = capitelized.length - 1; i >= 0; i--) {
            reverse += capitelized[i];
        }
        console.log(reverse);
    } else {
        console.log(capitelized);
    }
}

module.exports = {printAlphabetReversed};