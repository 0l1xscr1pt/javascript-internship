function swap(o1, o2) {

    [ref1.a, ref2.a] = [ref2.a, ref1.a];
    console.log(ref1, ref2)

}

module.exports = { swap }
