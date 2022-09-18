function sumOfMultiples(arr) {
    let sum = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        if (newArr[i] % 3 === 0 || newArr[i] % 5 === 0){
            sum += newArr[i];
        }   
    }
    return sum;
}

module.exports = sumOfMultiples;