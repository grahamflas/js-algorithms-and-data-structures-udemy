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

//REFACTOR
function fibV2(n){
  if (n <= 2) return 1;
  return fibV2(n-1) + fibV2(n-2)
}

/*
What's happening

                      fib(5)
                  /           \
            fib(4)            fib(3)
            /      \           /     \ 
      fib(3)      fib(2)   fib(2)  fib(1)
      /     \      => 1    => 1     => 1
  fib(2)  fib(1)
    => 1    => 1 
*/

//FIRST PASS

//Delcare a starter fibArray that is 2 elements long and a counter set to 2
//Write helper function addFib(input) that sums the last two elements of the current fibArray and pushes the sum onto fibArray
  //increment count
  //exit helper function with count === n
//return fibArray[n-1]

function fibV1(n){
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

/*
===============
Write a function that returns an array of Fibonacci numbers that is n elements long
===============
*/

//Iterative solution is much faster here
function printFibSequenceFaster(length){
  let fibSeq = [1, 1]
  
  if (length < 3){
    return fibSeq.slice(0,length);
  } 

  for (let i = 2; i < length; i++){
    fibSeq.push( fibSeq[i - 1] + fibSeq[i - 2])
  }

  return fibSeq;
}

//this function increases in time complexity extremely quickly, because of the number of recursive calls as i grows
function printFibSequenceSlow(length){
  if (length < 1) return;

  let fibSeq = []

  for (let i = 1; i <= length; i++){
    fibSeq.push( fibV1(i) )
  }

  return fibSeq;
}