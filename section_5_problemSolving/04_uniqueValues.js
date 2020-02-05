document.addEventListener("DOMContentLoaded", () => {
  let p = document.createElement("p")
  p.innerText = "scripts loaded"
  document.body.appendChild(p)
});

/*
===============
Implement a funciton countUniqueValues() that accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted
===============
 */

//FIRST IMPLEMENTATION

/*
//Mutate the array so that uniqe values are clustered at the front
//the final answer will be the index of i + 1

                          i 
  [1, 2,  3,  4,  5,  6,  7,  5,  5,  6,  7]  // should return 7
                                          j 


   //if array[i] === array[j], increment j
   //if array[i] !== array[j]
      // increment i 
      // mutate array: array[i] = array[j]
      // increment j

  //return i + 1
     
 */

function countUniqueValuesV1(array){
  let count = 0
  
  if (array.length === 0){
    return count
  } else {
    let i = 0
    for (let j=1; j < array.length; j++){
      if (array[i] !== array[j]){
        i++;
        array[i] = array[j]
      }
    }
    count = i + 1;
  }
  return count
}

// SECOND IMPLEMENTATION
  // declare i and return i+1 after the loop

function countUniqueValuesV2(array){
  if (array.length === 0) return 0;

  let i = 0;

  for(let j=1; j<array.length; j++){
    if (array[i] != array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  
  return i + 1;
}



 