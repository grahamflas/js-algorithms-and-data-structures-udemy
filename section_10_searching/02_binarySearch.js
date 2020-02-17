document.addEventListener("DOMContentLoaded", () => {
  let linkedFiles = document.getElementById("linked-files")
  let thisFile = document.createElement("li")
  thisFile.innerText = "02_binarySearch.js"
  linkedFiles.append(thisFile)
});

/*
Visualize Binary Search
  Pick a "pivot point" in the middle of the array and seeing in which half the element you're looking for will be:

Looking for 15:
                            
[1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]
                    ^
                      [12, 15, 16, 17, 18, 19]
                                ^
                      [12, 15, 16]  
                            ^

*/

/*
=========================
Implement Binary Search
___ Function accepts a sorted array and the value you're looking for
___ Create a left pointer (start) and a right pointer (end)
___ Loop to see if the element is
    ___ equal to the middle
    ___ greater/ less than middle
        ___ if greater than middle, move left pointer up
        ___ if less than middle, move right pointer down
___ If element is not contained, return -1
=========================
*/

//FIRST IMPLEMENTATION

function myBinarySearch(array, val){
  let left = 0
  let right = array.length -1

  while (left <= right){
    let middle = Math.floor( (right+left)/2 )
    console.log("array length: ", array.length, "middle index:", middle, "middle value: ", array[middle], "left portion: ", array.slice(left, middle), "right portion: ", array.slice(middle +1))
    if (array[middle] === val) return middle;
    if (array[middle] < val){
      left = middle + 1
    } else {
      right = middle - 1;
    }
  }
  return -1;
}