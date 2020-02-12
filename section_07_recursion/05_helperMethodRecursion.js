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
  //Not as performant. See Second Implementation 
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

//SECOND IMPLEMENTATION
  //collect odds starting from the beginnig of the array

function collectOddsAscend(array){
  let result = [];

  function isOdd(input){
    if (input.length > 0){
      if (input[0] % 2 !== 0){
        result.push(input[0])
      }
      isOdd(input.slice(1))
    }
    return;
  }
  isOdd(array)
  return result;
}

function makeLongArray(){
  let array = []
  for (let i=1; i<10000; i++){
    array.push(i);
  }
  return array;
}

let longArray = makeLongArray()


let t0=performance.now()
collectOddsDescend(longArray)
let t1=performance.now()

console.log(`collectOddsDescend executed in ${(t1 - t0)} milliseconds`)

let t2=performance.now()
collectOddsAscend(longArray)
let t3=performance.now()

console.log(`collectOddsAscend executed in ${(t3 - t2)} milliseconds`)
 
