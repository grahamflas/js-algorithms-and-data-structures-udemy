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