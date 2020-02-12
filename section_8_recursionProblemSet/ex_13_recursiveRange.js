/*
===============
Write a function called recursiveRange() which accepts a number and adds up all the numbers from 0 to the number passed to the function
===============
*/

recursiveRange(1) // 1
recursiveRange(2) // 3
recursiveRange(3) // 6
recursiveRange(4) // 10
recursiveRange(5) // 15
recursiveRange(6) // 21

function recursiveRange(num){
  if(num === 0) return 0;
  return num + recursiveRange(num-1);
}