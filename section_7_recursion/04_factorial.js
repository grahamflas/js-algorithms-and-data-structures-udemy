document.addEventListener("DOMContentLoaded", () => {
  let conf = document.getElementById("conf")
  conf.innerText = "scripts loaded"
});

// ===============
//  Write a function that evaluates a factorial expression
// ===============

// ITERATIVE SOLUTITON
function factorialIterative(n){
  let result = 1
  for (let i=n; i > 0; i-- ){
    result = result * i
  }
  return result
}

// RECURSIVE SOLUTION
function factorialRecursive(n){
  if (n === 1) return 1;
  return n * factorialRecursive(n-1)
}