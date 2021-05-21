let n = -20;

function isNegative(n) {
    if (n > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNegative(n));

module.exports = {isNegative}