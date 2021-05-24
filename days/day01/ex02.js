let alphabet = "";

function printAlphabetReversed(capitelized, reverse) {
    for (x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        alphabet += String.fromCharCode(x);
    }
    if (alphabet){
        capitelized = alphabet.toUpperCase();
        return capitelized;
    }
    reverse = alphabet.reduceRight((acc, curr) => acc.concat(curr));
    return reverse;

}

console.log(printAlphabetReversed(alphabet));

module.exports = {printAlphabetReversed};

//function -25 lignes
//split et reverse interdites