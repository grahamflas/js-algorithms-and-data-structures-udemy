/*
===============
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow() 
Do not worry about about negative bases and exponents
===============
*/

// power(2,2)   //4
// power(2,1)   //2
// power(2,0)   //1
// power(0,2)   //0

function power(base, exp){
  let counter = exp
  let result = 1

  if (base < 0 || exp < 0) return "Both base and exponent must be positive"
  if (exp === 0) return result

  function multiply(input){
    if (counter > 0){
      result *= input
      counter--;
      multiply(input)
    }
    return;
  }

  multiply(base);
  return result;
}
