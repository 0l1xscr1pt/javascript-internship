function keep(list, predicate) {
    let newList = [];
    for (let n = 0; n < list.length; n++) {
        if (predicate(list[n])) {
            newList.push(list[n]);
        }
    }
    return newList;
}

function discard(list, predicate) {
    let newList = [];
    for (let n = 0; n < list.length; n++) {
        if (predicate(list[n]) == false) {
            newList.push(list[n]);
        }
    }
    return newList;
}
