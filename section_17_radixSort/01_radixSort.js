document.addEventListener("DOMContentLoaded", () => {
  let linked = document.getElementById("linked")
  let li = document.createElement("li")
  li.innerText = "01_radixSort.js"
  linked.append(li)
});

let a1 = [248, 45, 835, 185, 205, 916, 471, 923, 968, 607, 136, 552, 897, 511, 577];
let a2 = [722, 385, 639, 704, 564, 549, 206, 877, 495, 284, 883, 193, 565, 454, 725];
let a3 = [819, 70, 844, 308, 964, 612, 872, 134, 159, 801, 814, 383, 745, 909, 644];
let a4 = [650, 743, 540, 139, 102, 873, 657, 696, 456, 358, 471, 550, 123, 252, 291];
let a5 = [313, 520, 421, 742, 991, 912, 33, 361, 483, 141, 924, 1, 441, 263, 106];


/*
=========================
RADIX SORT - HELPER FUNCTIONS
=========================

getDigit(num, place)
  ___ returns the digit in num at the given place value

digitCount(num) - returns the number of digits in a num

mostDigits(array) - use digitCount to return the count of digits in the number that has the most digits
*/

function getDigit(num, i){
  return Math.floor( Math.abs(num)/Math.pow(10, i) ) % 10;
}

function digitCount(num){
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) +1;
}

function mostDigits(array){
  let maxDigits = 0;
  for (let i=0; i<array.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(array[i]))
  }
  return maxDigits;
}

/*
=========================
RADIX SORT - PSEUDO CODE
=========================

___ Define a function that accepts an array of numbers
___ Figure out how many digits the largest number has
___ Loop from i=0 while i < largest number of digits
___ for each iteration
  ___ create buckets for each digit (0 to 9)
  ___ place each number in the corresponding bucket based on its ith digit
___ replace existing array with values in the bucket from 0 to 9
___ return the list at the end
*/

function radixSort(array){
  let maxDigitCount = mostDigits(array);
  
  for(let i=0; i<maxDigitCount; i++){
    let digitBuckets = Array.from ({length: 10}, () => [])
    for(let k=0; k < array.length; k++){
      let digit = getDigit(array[k], i);
      digitBuckets[digit].push(array[k])
    }
    array = [].concat(...digitBuckets)
  }
  return array
}