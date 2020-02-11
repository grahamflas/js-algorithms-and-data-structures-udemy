document.addEventListener("DOMContentLoaded", () => {
  let conf = document.getElementById("conf");
  conf.innerText = "Scripts loaded"
});

//Write a recursive function that takes in a number `n` and returns the sum of the numbers in the range 1...n

function sumRange(n){
  if (n === 1) return 1;

  return n + sumRange(n-1)
}

/*
sumRange(3) //=> 6

Here's what's happening:

return 3 +  sumRange(2)                                 //=> 6
              return 2 +  sumRange(1)                   //=> 3
                            return 1      <-- Base Case //=> 1
*/      