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


/*
//set a left pointer === 0, right pointer === array.length
//loop while left <= right
  // find the middle of the portion of the array we're focused on => average of left and right
  // if middle === val, return val
  // if middle < val (i.e., the value we're looking for is to the RIGHT of the middle), left = middle + 1
  // if middle > val (i.e., the value we're looking for is to the LEFT of the middle), right = middle -1
// if we break out of the loop without returning anything, the value is not in the arry => return "Value not found"
*/

function myBinarySearchAgain(array, val){
  let left = 0;
  let right = array.length;

  while (left <= right){
    let middle = Math.floor( (left + right)/ 2 );

    if (array[middle] === val) return `${val} is located at index ${middle}`
    if (array[middle] < val){
      left = middle + 1;
    } else {
      right = middle -1;
    }
  }

  return `${val} is not contained in this array`
}

//Slightly different implementation in which we're checking the value of middle, not whether left <= right

function anotherBinarySearch(array, val){
  let left = 0;
  let right = array.length
  let middle = Math.floor((left + right)/2);

  while (array[middle] !== val && left <= right){
    if (array[middle] < val){
      left = middle + 1; 
    } else {
      right = middle -1;
    }
    middle = Math.floor((left + right)/2);
  }

  return array[middle] === val ? middle : -1;
}