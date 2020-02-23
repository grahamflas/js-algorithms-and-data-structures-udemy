document.addEventListener("DOMContentLoaded", () => {
  let linked = document.getElementById("linked")
  let li = document.createElement("li")
  li.innerText = "01_radixSort.js"
  linked.append(li)
});

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

