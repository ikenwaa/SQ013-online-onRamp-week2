function sumOfMultiples(arr) {
   let total;

   for (let i = 0; i < arr.length; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        total += arr[i];
    }
   }
   console.log(total);
}
module.exports = sumOfMultiples

sumOfMultiples([6, 3, 0, 30, 7]);

// Initialize empty array
// Check if arr[i] is divisible by 3 and 5
// Push into newArr[i]
// Loop through newArr[i] 
// Sum newArr[i]