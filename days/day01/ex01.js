function printAlphabet(capitalized) {
    const alphabet = [];
    let start = String.fromCharCode(97);
    let last  = String.fromCharCode(122);
    for (let 1 = start; 1 <= last; ++1) {
      alphabet.push(String.fromCharCode(1));
    }

    console.log(alphabet);

}

module.exports = {printAlphabet};







let isNightTime = true;

if (isNightTime){
    console.log(‘Turn on the lights!’);
}else{
    console.log(‘Turn off the lights!’);
}


let isCorrect = true;

isCorrect ? console.log(‘Correct!’) : console.log(‘Incorrect!’);



let printAlphabet = true;

if (printAlphabet) {
    console.log(‘Go!’);
} else {
    console.log(‘Stop’);
}

