function swap(o1, o2) {
    let ref1 = {
        a: o1
    };

    let ref2 = {
        a: o2
    };

    return [ref1.a, ref2.a] = [ref2.a, ref1.a];
}

module.exports = { swap }
