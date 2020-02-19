document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked-files")
  let li = document.createElement("li")
  li.innerText = "01_selectionSort.js"
  ul.append(li)
});

//Test arrays
let array1 = [5, 4, 15, 14, 0, 11, 7, 2, 10, 9, 12, 3, 13, 8, 1, 6];
let array2 = [13, 0, 11, 2, 3, 14, 8, 4, 1, 10, 6, 12, 7, 15, 5, 9];
let array3 = [0, 2, 13, 15, 12, 10, 7, 9, 11, 3, 4, 8, 6, 14, 1, 5];

function swap(array, i, j){
  [array[i], array[j]] = [array[j], array[i]]
}

/*
=========================
Selection Sort PSEUDO CODE
=========================
___ loop over the array starting at i=0
  ___ let minimum = array[i]
  ___ let minIndex = i
    ___ create an inner loop, j=i+1
    ___ if array[j] < minimum, minimum = array[j], let minIndex = j
  ___ if minIndex !== i, swap(array, i, minIndex)
___ return array
*/

function mySelectionSort1(array){
  for(i=0; i < array.length; i++){
    let minIndex = i;
    for (j=i+1; j < array.length; j++){
      if (array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    if (minIndex !== i){
      swap(array, i, minIndex)
    }
  }
  return array;
}