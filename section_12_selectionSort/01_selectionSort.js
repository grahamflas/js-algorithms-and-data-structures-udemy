document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked-files")
  let li = document.createElement("li")
  li.innerText = "01_selectionSort.js"
  ul.append(li)
});

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
    let minimum = array[i];
    let minIndex = i;
    for (j=i+1; j < array.length; j++){
      if (array[j] < minimum){
        minimum = array[j];
        minIndex = j;
      }
    }
    if (minIndex !== i){
      swap(array, i, minIndex)
    }
  }
  return array;
}