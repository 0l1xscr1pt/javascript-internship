function swap(o1, o2) {
    let ref1 = {
        a: 1
    };

    let ref2 = {
        a: 5
    };

    [ref1.a, ref2.a] = [ref2.a, ref1.a];
}

module.exports = {swap}