document.addEventListener("DOMContentLoaded", () => {
  let linkedFiles = document.getElementById("linked-files")
  let thisFile = document.createElement("li")
  thisFile.innerText = "01_introToLinearSearch.js"
  linkedFiles.append(thisFile)
});

/*
===============
Implement Linear Search
___ This function accepts and array and a value
___ Loop through the array and check if the current array element is equal to the value
___ If yes, retn the index at which the element is found
___ if the value is never found, return -1
===============
*/

//FIRST PASS
  // O(n) time complexity

function myLinearSearch(array, val){
  for(let i = 0; i < array.length; i++){
    if (array[i] === val){
      return i;
    }
  }
  return -1;
}