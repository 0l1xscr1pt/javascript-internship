function printComb() {
    let numbers = "";
    for (let z = 0, y = 1; z < 10; z++) {
        for (let y = 1; y < 10; y++) {
            for (let x = 2; x < 10; x++) {
                y > z && x > y ? numbers += z : ''
                y > z && x > y ? numbers += y : ''
                y > z && x > y ? numbers += x + ", " : ''
            }
        }
    }
    console.log(numbers.slice(0, -2));
}

module.exports = {printComb}