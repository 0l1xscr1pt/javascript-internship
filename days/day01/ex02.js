function printAlphabetReversed(capitelized, reverse) {
    let alphabet = "";
    for (let x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        alphabet += String.fromCharCode(x);
    }

    if (capitelized === true) {
        alphabet = alphabet.toUpperCase();
    }

    if (reverse === true) {
        function reverse(alphabet) {
            return alphabet ? reverse(alphabet.substr(1)) + alphabet[0] : alphabet;
        }

        alphabet = reverse(alphabet);
    }
    console.log(alphabet);
}

module.exports = {printAlphabetReversed};
