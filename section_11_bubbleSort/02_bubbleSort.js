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
  console.log(array)
}