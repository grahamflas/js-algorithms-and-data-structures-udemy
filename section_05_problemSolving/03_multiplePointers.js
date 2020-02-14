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

// SECOND IMPLEMENTATION

function sumZeroV2(array){
  let left = 0
  let right = array.length -1

  while (left < right){
    let sum = array[left] + array[right];
    if (sum === 0){
      return [ array[left], array[right] ]
    } else if (sum > 0){  //if sum is greater than zero, we want to keep the left position and move the right condition closer to zero.  Only do this if sum > 0, because if not, because the array is ordered, further moves to the right will only get your furhter from zero
      right--;
    } else {  //See above. If sum is less than zero
      left++;
    }
  }
}


 
