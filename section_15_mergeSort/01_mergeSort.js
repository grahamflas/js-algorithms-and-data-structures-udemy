document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked")
  let li = document.createElement("li")
  li.innerText = "01_mergeSort.js"
  ul.append(li)
});

/*
=========================
MERGE SORT
=========================
+ A divide and conquer algorithm that takes advantage of the fact that arrays of length 0 || 1 are already sorted
  + Split an array into smaller arrays and then merge them back together

        [8, 3, 5, 4, 7, 6, 1, 2]
        /                       \
  [8, 3, 5, 4]                   [7, 6, 1, 2]
  /           \                  /          \
[8, 3]        [5, 4]        [7,6]           [1,2]
/     \       /     \        /  \            /  \
[8]    [3]   [5]     [4]    [7]  [6]        [1] [2]
    \ /      
    [3,8]       [4,5]         [6,7]           [1,2]
          [3,4,5,8]                 [1,2,6,7]
                  [1,2,3,4,5,6,7,8]     
*/


