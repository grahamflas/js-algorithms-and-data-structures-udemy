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

// REFACTOR
function powerV2(base, exp){
  if (exp === 0) return 1;
  return base * powerV2(base, exp-1)
}

/*
What's happening

powerV2(2,4)

  2 * powerV2(2, 3)             //2 * 8 => 16
      2 * powerV2(2, 2)         //2 * 4 => 8
          2 * powerV2(2, 1)     //2 * 2 => 4
              2 * powerV2(2, 0) //2 * 1 => 2
                  1             //1
*/

//FIRST PASS
function powerV1(base, exp){
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
