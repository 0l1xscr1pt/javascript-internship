function atoi(numberAsString) {
    if (numberAsString > 1) {
        return numberAsString
    } else if (numberAsString === 0) {
        return 0
    }
}
atoi(+ '0120')
module.exports = {atoi}
