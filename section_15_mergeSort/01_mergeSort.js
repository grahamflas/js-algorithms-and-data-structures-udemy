document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked")
  let li = document.createElement("li")
  li.innerText = "01_mergeSort.js"
  ul.append(li)
});

let a1 = [12, 40, 67];
let a2 = [1, 21, 32, 70, 82];
let a3 = [1, 27, 78, 83, 96];
let a4 = [1, 66, 68, 77];
let a5 = [12, 58, 64, 77, 84];
let a6 = [30, 82, 84, 93];
let a7 = [9, 18, 27, 48, 78];
let a8 = [6, 38];

/*
=========================
MERGE SORT
=========================
+ A divide and conquer algorithm that takes advantage of the fact that arrays of length 0 || 1 are already sorted
  + Split an array into smaller arrays and then merge them back together

        [8, 3, 5, 4, 7, 6, 1, 2]
        /                       \
  [8, 3, 5, 4]                   [7, 6, 1, 2]
  /           \                  /          \
[8, 3]        [5, 4]        [7,6]           [1,2]
/     \       /     \        /  \            /  \
[8]    [3]   [5]     [4]    [7]  [6]        [1] [2]
    \ /      
    [3,8]       [4,5]         [6,7]           [1,2]
          [3,4,5,8]                 [1,2,6,7]
                  [1,2,3,4,5,6,7,8]     
*/

/*
===================================
STEP ONE___ write a function that merges two arrays
+ Given two arrays which are sorted, create a new array which is also sorted and consists of all of the elements in the two input arrays

+ Don't mutate the parameters
===================================
merge([1,10,50], [2,14,99,100]) => [1,2,10,14,50,99,100]

PSEUDOCODE
___ create an empty array to return
___ look at the smallest values of each of the parameters, i=0 and j=0
  ___ while there are still elements we haven't looked at
    ___ if the value in array1 is smaller than the value in array2, push the value in the array1 and move to next element in array1
    ___ umgekehrt
    ___ when we exhaust one array, push in the remaining values from the second array

*/

//MY FIRST IMPLEMENTATION OF MERGE
function merge(array1, array2){
  let result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length){
    if (array1[i] < array2[j]){
      result.push(array1[i]);
      i++;
    } else { //catches both cases of 1) elements being equal and 2) array2[j] being greater
      result.push(array2[j])
      j++;
    }
  }

  if (i !== array1.length){
    for (let k = i; k < array1.length; k++){
      result.push(array1[k])
    }
  } else {
    for (let k = j; k < array2.length; k++){
      result.push(array2[k])
    }
  }

  return result;
}

/*
===================================
STEP TWO___ write a function that merges two arrays

___ Break an array into halves until you have arrays that are empty or only have one element in them

___ Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

___ Once the arrays have been merged together, return the merged (sorted) array

===================================

*/

function myMergeSort(array){
  //start with base case
  if (array.length <= 1) return array

  let mid = Math.floor(array.length/2)
  let left = myMergeSort(array.slice(0,mid))
  let right = myMergeSort(array.slice(mid))
  
  return merge(left, right)
}