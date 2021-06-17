function sortInteger(numbers) {
    for (let i = 0; i < numbers.length;) {
        const temp = numbers[i];

        if (numbers[i] > numbers[i + 1]) {
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = temp;
            i = 0;
        } else {
            i++
        }
    }
    return numbers;
}

module.exports = {sortInteger}
