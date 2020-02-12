// Calculate the sum of all numbers from 1 up to and including n

// *** First solution: ***

function addUpToWithLoop(n){
  let total = 0;
  for (let i=1; i<=n; i++){
    total += i;
  }
  return total;
}



// *** Second solution: ***
function addUpToNoLoop(n){
  return n * (n+1) / 2;
}


//Test performance of both functions

let t1 = performance.now()
addUpToWithLoop(1000000000)
let t2 = performance.now()
console.log(`addUpToWithLoop(): ${(t2-t1) / 1000} seconds`)

let t3 = performance.now()
addUpToNoLoop(1000000000)
let t4 = performance.now()
console.log(`addUpToNoLoop(): ${(t4-t3) / 1000} seconds`)