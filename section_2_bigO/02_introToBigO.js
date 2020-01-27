//Big O(1) --> always 3 operations
function addUpToNoLoop(n){
  return n * (n+1) / 2;
}



//O(n) --> number of operations is bouned by a multiple of n; simplifies to n
function addUpToWithLoop(n){
  let total = 0;
  for (let i=0; i<=n; i++){
    total += i;
  }
  return total;
}



//O(n)
function countUpAndDown(n){
  console.log("Going up!");
  for (let i=0; i<=n; i++){
    console.log(i);
  }
  console.log("At the top. Going back down");
  for (let j=n-1; j>=0; j--){
    console.log(j);
  }
  console.log("Back at the bottom.")
}



//O(n^2) --> Two nested loops. Each loop is an O(n) operation, but because they're nested, we have an O(n) operation inside of an O(n) operation.  This results in O(n^2)
function printAllPairs(n){
  for (i=0; i<=n; i++){
    for(j=0; j<=n; j++){
      console.log(i, j);
    }
  }
}


// Two algorithms that are similar, but one is O(n) and one is O(1)

//O(n) --> as n increases, time complexity increases, because if n > 5, the loop executes n times
function logAtLeast5(n){
  for (let i=0; i<=Math.max(5, n); i++){
    console.log(i);
  }
}

//O(1) --> constant runtime, the loop always excutes 5 times regardless of n
function logAtMost5(n){
  for (let i=0; i <= Math.min(5, n); i++){
    console.log(i);;
  }
}