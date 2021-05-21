function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("l'arbre"));

module.exports = {reverseString}