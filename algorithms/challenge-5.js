function accum(str) {
    let result = [];
    let lowStr = str.toLowerCase();
    
    let i = 0;
    while (i < str.length){
        let newStr = lowStr[i].toUpperCase();
        let j = 0;
        while (j < i) {
            newStr += lowStr[i]
            j++;
        }
        result.push(newStr);
        i++;
    }
    return result.join("-");
}

console.log(accum("RqaEzty"));
module.exports =accum