/*
===============
Write a function called productOfArray() which takes in an array of numbers and returns the product of them all
===============
*/

// productOfArray([1,2,3,4,5]) //120

function productOfArray(array){
  if(array.length === 0 ) return 1;
  let result = array[0];
  return result * productOfArray(array.slice(1));
}