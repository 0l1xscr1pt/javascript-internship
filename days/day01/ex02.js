function printAlphabetReversed(capitelized, reverse) {
    let alphabet = "";
    for (x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        alphabet += String.fromCharCode(x);
    }
    if (capitelized === true) {
        capitelized = alphabet.toUpperCase();

        if (reverse === true) {
            reverse = "";
            for (let i = capitelized.length - 1; i >= 0; i--) {
                reverse += capitelized[i];
            }
            console.log(reverse);
        } else {
            console.log(capitelized);
        }
    } else {
        console.log(alphabet);
    }
}

module.exports = {printAlphabetReversed};
