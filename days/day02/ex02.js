function swap(o1, o2) {

    [o1.a, o2.a] = [o2.a, o1.a];
    console.log(o1, o2)

}

module.exports = { swap }
