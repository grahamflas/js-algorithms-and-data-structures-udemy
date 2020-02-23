document.addEventListener("DOMContentLoaded", () => {
  let scriptsList = document.getElementById("scripts");
  let li = document.createElement("li");
  li.innerText = "01_quickSort.js";
  scriptsList.append(li);
});


let array1 = [0, 6, 8, 9, 7, 5, 2, 3, 4, 10, 1];
let array2 = [10, 0, 2, 1, 9, 6, 7, 4, 3, 8, 5];
let array3 = [6, 10, 3, 1, 0, 8, 7, 2, 5, 4, 9];

/*
=========================
QUICK SORT
=========================
+ Takes advantage of the fact that arrays with 0 || 1 elements are by definition sorted
+ Selects one element -- the PIVOT -- and finds the index at which the pivot should be located in a sorted array
  + Moves all elements less than the PIVOT to the left, all elements greater than the PIVOT to the right
+ When the PIVOT is positioned correctly, apply quickSort() to either side of the PIVOT
*/

/*
=========================
PIVOT HELPER
=========================
+ Write a helper function that arranges elements in an array on either side of the pivot
+ Designate some element as the pivot
+ Rearrange elements s.t. elements less than the pivot are to the left, greater than pivot are to the right
+ Order of elements on either side of the pivot don't matter
+ This function should rearrange *in place*
+ This function should return the pivot

=== PSEUDO CODE ===
___ Accept 3 args: array, start index, end index {array, 0, array.length-1}
___ Grab pivot from the start of the array
___ Store the current pivot index in a variable that keeps track of where the pivot should end up -- this will be the count of the elements in the array that are less than the pivot
___ Loop over the entire array starting at the beginning
  ___ If pivot > current element, increment pivot index variable and swap the current element with the element at the pivot index
___ Swap the starting element (i.e., the pivot) with the swap index
___ Return the pivot index
*/

/*
VISUALIZATION

  0  1   2   3   4   5   6   7
 [4, 8,  2,  1,  5,  7,  6,  3]     original array

  pivot = 4
  swapIndex = 3

 LOOP
 [4, 8,  2,  1,  5,  7,  6,  3] i=1 -> no swap
 [4, 2,  8,  1,  5,  7,  6,  3] i=2 -> incremented swapIndex=1, swap element at 2 with swapIndex
 [4, 2,  1,  8,  5,  7,  6,  3] i=3 -> incremented swapIndex=2, swap element at 3 with swapIndex
 [4, 2,  1,  8,  5,  7,  6,  3] i=4 -> no swap
 [4, 2,  1,  8,  5,  7,  6,  3] i=5 -> no swap
 [4, 2,  1,  8,  5,  7,  6,  3] i=6 -> no swap
 [4, 2,  1,  3,  5,  7,  6,  8] i=7 -> incremented swapIndex=3, swap element at 7 with swapIndex
 
 BREAK OUT OF LOOP
 [3, 2,  1,  4,  5,  7,  6,  8] -> swap startIndex with swap Index

*/

function pivot(array, startIndex=0, endIndex=array.length-1){

  function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = array[startIndex];
  let swapIndex = startIndex;

  for (let i = startIndex + 1; i<array.length; i++){
    if (pivot > array[i]){
      swapIndex++;
      swap(array, i, swapIndex)
    }
  }
  swap(array, startIndex, swapIndex)
  return swapIndex
}