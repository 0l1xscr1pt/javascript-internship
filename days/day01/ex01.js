let array = [];
function printAlphabet(capitelized) {
    for (x = 97, i = String.fromCharCode(x); x <= 122; x++) {
        array.push(String.fromCharCode(x));
    }
    capitelized = array.map(arr => arr.toUpperCase());
    return capitelized;
}

console.log(printAlphabet(array));

