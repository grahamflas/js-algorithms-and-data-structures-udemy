document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked")
  let li = document.createElement("li")
  li.innerText = "01_mergeSort.js"
  ul.append(li)
});

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
      i++
    } else {
      result.push(array2[j])
      j++
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