document.addEventListener("DOMContentLoaded", () => {
  let conf = document.getElementById("conf")
  conf.innerText = "scripts loaded"
});

/*
===============
Use recursion to write a function that returns an array of all odd values contained in an original array
===============
*/

// FIRST IMPLEMENTATION 
  //collecting odds in descending order is probably more perfomant, because it's quicker to remove elements from the end of an array
function collectOddsDescend(array){
  let result = []

  function isOdd(input){
    if (input.length > 0) {
      let lastEl = input[input.length-1]
      if (lastEl % 2 !== 0){
        result.push(lastEl)
      }
      input.pop()
      isOdd(input);
    }
    return;
  }

  isOdd(array)

  return result;
}
