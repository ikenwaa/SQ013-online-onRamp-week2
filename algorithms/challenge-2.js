function sumOfTwoSmallestNums(arr){
    let sum;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    newArr.sort((a, b) => a - b);
    sum = newArr[0] + newArr[1];
    return sum;
}

module.exports = sumOfTwoSmallestNums