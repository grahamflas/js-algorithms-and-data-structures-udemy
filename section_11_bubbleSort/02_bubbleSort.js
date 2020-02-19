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