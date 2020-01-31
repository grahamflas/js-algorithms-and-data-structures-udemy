document.addEventListener("DOMContentLoaded", () => {
  const confirmation = document.getElementById("confirmation")
  confirmation.innerText = "Scripts loaded"
});

// ================================
// Write a function called same(), which accepts two arrays. 
// The function returns true if every value in array_one has its corresponding value squared in array_two
// The frequency of values must be the same 
// ================================

// My first pass 
function sameV1(array1, array2){
  if (array1.length === array2.length){
    for (let i=0; i<array1.length; i++){
      if (array1[i] * array1[i] !== array2[i]) return false
    }
    return true
  } else {
    console.log("The arrays are not of equal length")
    return false
  }
} //PROBLEM: this solution is order-dependent. 
    // Say we want [1,2,3] and [9,4,1] to return true



//NAIVE SOLUTION: Time complexity is O(n^2) 
  // We have a nested loop, which results in quadratic relationship
  // for() loops over array1 and inside of that loop, we .indexOf() loops over array2

function sameV2(array1, array2){
  if(array1.length !== array2.length) return false

  for(let i=0; i<array1.length; i++){
    let correctIndex = array2.indexOf(array1[i] **2) //returns index of given element or -1 if element not found
    if(correctIndex === -1) return false
    array2.splice(correctIndex,1) //remove the correct value if it's there; start the loop over
  }

  return true
}

//REFACTORED SOLUTION
  //time complexity is O(n) --> we have three loops, but none of them are nested, so this simplified to O(n)
function sameV3(array1, array2){
  if (array1.length !== array2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let val of array1){
    //if val is already a key, increment existing count by 1; otherwise, add it to object, set value to 0, then add 1. 
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; 
  }

  for(let val of array2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
  }

  for(let key in frequencyCounter1){
    //check to make sure the square of element in array1 is present as a key in the second object
    if(!(key**2) in frequencyCounter2) return false; 

    //make sure the frequencies are the same
    if( frequencyCounter2[key**2] !==  frequencyCounter1[key]) return false; 
  }

  return true;
}