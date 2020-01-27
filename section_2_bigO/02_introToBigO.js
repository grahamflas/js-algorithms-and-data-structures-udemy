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