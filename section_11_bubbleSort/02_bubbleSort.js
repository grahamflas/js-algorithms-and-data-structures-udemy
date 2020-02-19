document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked-files")
  let li = document.createElement("li")
  li.innerText = "02_bubbleSort.js"
  ul.append(li);
});

//Bubble sort involves comparing array elements, two at a time, and swapping them if element1 > element2
//Implement a swapping function:

//FIRST IMPLEMENTATION of Swap function
  //given an array and two indices, mutate the array such that array[1] === array[2], and array[2]===array[1]
    //___ save the current value of array[index1]
    //___ reset array[index1] to be array[index2]
    //___ reset array[index2] to be stored original value of array[index1]
function swapV1(array, index1, index2){
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

//SECOND IMPLEMENTATION of Swap function
function swapV2(array, index1, index2){
  [array[index1], array[index2]] = [array[index2], array[index1]] //This is using destructuring to swap.
  // console.log(array)
}


/*
FIRST IMPLEMENTATION
=========================
BUBBLE SORT PSEUDO CODE
__ loop over array while i < array.length - 1
  __ compare array[i] and array[i + 1]
    __ if array[i] > array[i+1], call swap
  __ if swap was made, make a recursive function call to bubbleSort, else return the array
=========================
*/

function myBubbleSort1(array){
  let swapped = false;

  for (i=0; i<array.length-1; i++){
    if (array[i] > array[i+1]){
      swapV2(array, i, i+1);
      swapped = true;
    }
  }

  if (swapped){
    myBubbleSort1(array)
  }
  return array
}

/*
SECOND IMPLEMENTATION (NAIVE)
=========================
BUBBLE SORT PSEUDO CODE
___ start looping from the end of the array using i
___ start inner loop from the beginning of the array until i-1
___ if array[j] > array[j+1], swap those two values
___ return sorted array
=========================
*/
//  0   1   2   3
// [5,  2,  8,  1]
// [2,  5,  8,  1]
// [2,  5,  1,  8]
// [2,  1,  5,  8]
// [1,  2,  5,  8]

/*
i=4, j=0
i=4, j=1
i=4, j=2
i=4, j=3 // stop
i=3, j=0
i=3, j=1
i=3, j=2 /// stop
i=2, j=0
i=2, j=1 // stop
i=1, j=0
*/

function myBubbleSort2(array){
  for(let i=array.length; i > 0; i--){
    for (let j=0; j < i-1; j++){
      if (array[j] > array[j+1]){
        swapV2(array, j, j+1)
      }
    }
  }
  return array
}

//OPTIMIZED SOLUTION***
function myBubbleSort3(array){
  let noSwaps;
  for(i=array.length; i>0; i--){
    noSwaps = true;
    for(j=0; j<i-1; j++){
      if (array[j] > array[j+1]){
        swapV2(array, j, j+1)
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}
