function basicAtoi(numberAsString) {
    let test = 0;
    for (let a = 0, z = numberAsString.length;
        a < numberAsString.length, z > 0; a++, z--) {
        test += numberAsString[a] * (1 + '0'.repeat(z - 1));
    } 
    return test
}

module.exports = { basicAtoi }
