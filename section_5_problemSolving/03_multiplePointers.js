console.log("scripts loaded")

/*
  ===============
  Write a function called sumZero which accetps a sorted array of integers. 
  The function should find the first pair where the sum is 0. 
  Return an array that includes both values that sum to zero or undefined if a pair doesn't exist.
  ===============
 */

 // FIRST IMPLEMENTATION
 //create an array that will hold our answer
 //for loop, initialize two pointers: i=0, j=array.length 
    //for each iteration, increment i, decrement j
    //if i + j === 0, push them to the array and return it

function sumZeroV1(array){
  let sumZeroResult = [];
  for (let i=0, j=array.length - 1; i<array.length/2; i++, j--){
    if (array[i] + array[j] === 0){
      sumZeroResult.push(array[i], array[j])
      return sumZeroResult
    }
  }
}



