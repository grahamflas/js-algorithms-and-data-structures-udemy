document.addEventListener("DOMContentLoaded", () => {
  let confirm = document.getElementById("confirm")
  confirm.innerText = "scripts loaded"
});

/*
===============
Given a SORTED array of integers, write a functtion called search() that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
===============
*/

//FIRST IMPLEMENTATION
  //naive solution
  //NOTE: this is called Linear Search, time complexity is O(n)
function searchV1(array, val){
  if (!array.length) return -1

  for (let i=0; i < array.length; i++){
    if (array[i] === val) return i;
  }
  return -1;
}

//SECOND IMPLEMENTATION
  //Binary Search - time complexit is Log(n)

function searchV2(array, val){
  let min = 0;
  let max = array.length - 1;

  while (min <= max){
    let middle = Math.floor( (min + max)/2 );

    if (array[middle < val]){
      min = middle + 1; 
    }
    else if (array[middle] > val){
      max = middle -1;
    }
    else {
      return middle;
    }
  }
  return -1;
}