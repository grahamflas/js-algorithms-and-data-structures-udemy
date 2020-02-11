document.addEventListener("DOMContentLoaded", () => {
  let p = document.getElementById("confirmation")
  p.innerText = "Scripts loaded"
});

// ITERATIVE SOLUTION
function countDownIterative(num){
  for (let i=num; i > 0; i--){
    console.log(i);
  }

  console.log("Fin");
}

// RECURSIVE SOLUTION
function countDownRecursive(num){
  if (num <= 0){        //this is the Base Case
    console.log("Fin");
    return;
  }

  console.log(num);
  num--;
  countDownRecursive(num)    //recursive function call
}