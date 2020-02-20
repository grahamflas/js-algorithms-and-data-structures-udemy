let array1 = [0, 3, 1, 2, 5, 4]
let array2 = [0, 2, 1, 5, 4, 3]
let array3 = [2, 5, 3, 0, 1, 4]

/*
=========================
INSERTION SORT
=========================
Insertion sort starts from the 2nd element in the collection and moves up until it reaches the end. For each element, it looks at the element(s) to the left to see if it(they) are smaller than the current element. If they are, move those elements to the right and insert the current element where the element to the left is smaller than the current element. 

___ loop over the array until you reach the end. Start with 2nd element (i=1)
___ store the current value
___ create an inner loop that starts to the left of the current i (j= i-1) and continues while j >=0 && the element at indx j > current value (when it's not, we have reached the point at which we need to insert the current element)
___ for each iteration of the inner loop, move the element at j to the right
___ when you exit the inner loop, j === the index at which the current value should be inserted
*/

function insertionSort(array){
  for(let i=1; i<array.length; i++){
    let currentEl = array[i]
    for (var j=i-1; j >= 0 && array[j] > currentEl; j--){
      array[j+1] = array[j];
    }
    array[j+1] = currentEl
  }
  return array
}

/*
=========================
SELECTION SORT
=========================
Selection sort loops over the array looking for minimum values, collecting them at the beginning of the array. 

At the end of each loop, it swaps the i_th element with the minimum, collecting smaller numbers at the left and moving larger numbers to the right. 

_x_ loop over the array starting at the beginning, continue until the end (i=0; i<array.length; i++)
_x_ set minEl to i at the first pass
_x_ create an inner loop, starting at the element after i (j=i+1; j<array.length; j++)
_x_ if array[j] < array(minEl), set minEl to j
_x_ when the inner loop in complete, if minEl !== i (i.e., a new minimum has been found in that iteration), swap the element at i with the new minum
_x_ return array when the outer loop completes
*/

// function swap(array, a, b){
//   let temp = array[a];
//   array[a] = array[b];
//   array[b] = temp;
// }

// function selectionSort(array){
//   for (i=0; i < array.length; i++){
//     let minEl = i;
//     for (j=i+1; j < array.length; j++){
//       if (array[j] < array[minEl]) minEl = j;
//     }
//     if (minEl !== i) swap(array, i, minEl)
//   }
//   return array
// }

// function swap(array, a, b){
//   [ array[a], array[b] ] = [ array[b], array[a] ]
// }

// function bubbleSort(array){
//   for(i=array.length; i > 0; i--){
//     let noSwaps = true;
//     for(j=0; j < i-1; j++){
//       if (array[j] > array[j+1]){
//         swap(array, j, j+1)
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return array
// }