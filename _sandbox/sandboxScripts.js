/*
=========================
MERGESORT PSEUDO CODE
=========================

+ Merge sort takes advantage of the fact that arrays of length 1||0 are automatically sorted.
+ Split an array in half until you're left with arrays of length 1||0
+ Merge these arrays whose length===1||0 such that when they're merged, they are sorted --> Do this with a helper method that takes two sorted arrays as args and joins them into a single sorted array
*/

/*
=========================
MERGE PSEUDO CODE (helper function)
=========================
___ Write a function that takes two sorted arrays and returns one sorted array
___ Declare variable to store result
___ Set pointers to the beginning of each array: i=array1[0], j=array2[0]
  ___ while i<array1.length and j<array2.length:
    ___ if array1[i] < array2[i] => push array[i] onto results and increment i
    ___ umgekehrt
  ___ when you've broken out of while loop, that means you've pushed all of one of the array's elements onto results .: need to push the remaining elements of the other array onto results
    ___ if i !== array1.length, loop over the rest of array1 (k=i+1; k<array1.length; k++) and push onto results
    ___ umgekehrt
  ___ return results
*/

//test merge()
let a1 = [0, 3, 8, 16, 17];
let a2 = [0, 4, 5, 11, 14];
let a3 = [4, 7, 11, 17, 19];
let a4 = [11, 13, 15, 18, 19];

//test mergeSort() 
let a5 = [3, 8, 5, 2, 6, 4, 7, 1, 0, 10, 9];
let a6 = [9, 3, 2, 10, 0, 4, 8, 7, 5, 1, 6];
let a7 = [9, 0, 10, 1, 4, 2, 5, 6, 3, 7, 8];
let a8 = [7, 0, 9, 6, 4, 1, 10, 2, 5, 3, 8];



function merge(array1, array2){
  let result = [];
  let i = 0;
  let j = 0;

  while (i<array1.length && j<array2.length){
    if (array1[i] < array2[j]){
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++
    }
  }

  if (i !== array1.length){
    for (let k = i; k < array1.length; k++){
      result.push(array1[k])
    }
  } else {
    for (let m = j; m < array2.length; m++){
      result.push(array2[m])
    }
  }

  return result;
}

function mergeSort(array){
  if (array.length <=1) return array;

  let mid = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left,right)
}

