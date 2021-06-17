function divMod(n1, n2) {
    let result = n1 / n2
    let object = {
        div: Math.floor(result),
        mod: fits()
    }

    function fits() {
        if (Number.isInteger(result)) {
            return 0;
        }
        return 1;
    }

    return object
}

module.exports = {divMod}
