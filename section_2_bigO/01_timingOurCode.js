// Calculate the sum of all numbers from 1 up to and including n

// First pass:
function addUpTo(n){
  let total = 0;
  for (let i=1; i<=n; i++){
    total += i;
  }
  return total;
}

console.log(addUpTo(5))