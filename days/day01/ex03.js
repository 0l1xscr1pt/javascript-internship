function printAllDigitsNTimes(n) {
    for (let i = 0; i < n; i++) {
        let numbers = "";
        for (x = 48, y = String.fromCharCode(x); x <= 57; x++) {
            numbers += String.fromCharCode(x);
        }
        console.log(numbers);
    }
}
printAllDigitsNTimes(3);

module.exports = {printAllDigitsNTimes}

