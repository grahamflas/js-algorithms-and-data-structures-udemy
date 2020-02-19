document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked")
  let li = document.createElement("li")
  li.innerText = "01_insertionSort.js"
  ul.append(li);
});

let array1 = [15, 11, 14, 2, 12, 13, 0, 10, 7, 1, 3, 9, 6, 5, 8, 4]
let array2 = [7, 11, 5, 9, 1, 10, 13, 12, 6, 2, 0, 8, 3, 15, 14, 4]
let array3 = [11, 12, 9, 13, 5, 8, 2, 3, 7, 15, 14, 0, 1, 10, 6, 4]

/*
=========================
Insertion Sort PSEUDO CODE
=========================

___ Start with 2nd element in the array
___ compare the 2nd element with the one before it and swap if necessary
___ Continue to the next element and if it is in the incorrect order, iterate throught hte soreted portion to place teh element in the correct spot
___ repeat until the array is sorted

*/

//FIRST PASS -- we're comparing array[j] with currentVal = array[i]
  //if array[j] > currentVal, move array[j] up one position
  //when !(array[j] > currentVal), we've found the right position for current val 
    //array[j] = currentVal

function myInsertionSort1(array){
  let currentVal;
  for (let i=1; i<array.length; i++){
    currentVal = array[i]
    for (let j=i-1; j >= 0 && array[j] > currentVal; j--){
      array[j+1] = array[j]
      array[j] = currentVal;
    }
  }
  return array;
}