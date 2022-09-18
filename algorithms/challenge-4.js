function squareDigit(str) {
    let strToInt = [];

    for (let i = 0; i < str.length; i++){
        Number(strToInt.push(str[i] ** 2));
    }
    return strToInt.join("");
}

module.exports =squareDigit