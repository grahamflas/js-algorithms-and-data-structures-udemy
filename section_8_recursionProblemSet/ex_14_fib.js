/*
Write a recursive function called fib() which accepts a number and returns the nth number in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

// fib(1) // 1
// fib(2) // 1
// fib(3) // 2
// fib(4) // 3
// fib(5) // 5
// fib(6) // 8

//Delcare a starter fibArray that is 2 elements long and a counter set to 2
//Write helper function addFib(input) that sums the last two elements of the current fibArray and pushes the sum onto fibArray
  //increment count
  //exit helper function with count === n
//return fibArray[n-1]

function fib(n){
  if (n <= 2) return 1;

  let fibArray = [1,1];
  let counter = 2;

  function addFib(input){
    if (input === n) return;
    fibArray.push( fibArray[input-2] + fibArray[input-1] )
    counter++; 
    addFib(counter)
  }

  addFib(counter)
  return fibArray[n-1];
}
