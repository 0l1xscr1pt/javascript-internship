function toRna(rna) {
    let alpha = '';
    const G = 'C', C = 'G', T = 'A', A = 'U';
    for (let i = 0; i < rna.length; i++) {
        let letter = rna[i];
        if (letter === 'G') {
            alpha += G;
        } else if (letter === 'C') {
            alpha += C;
        } else if (letter === 'T') {
            alpha += T;
        } else if (letter === 'A') {
            alpha += A;
        } else {
            console.log('  No !  ' + rna);
        }
    }
    console.log(alpha)
}

module.exports = {toRna}

