//PROBLEM:  Write a function which takes in a string and returns counts of each character in the string

//STEP 1: Determine output should be an object. Write out some simple examples along with what the output should be

testFunc("aaaa") // {a: 4}
testFunc("hello") // {h: 1, e: 1, l: 2, o:1}

//STEP 2: Think about more complex inputs, edge cases

testFunc("my phone number is 12345")  //Do we count spaces? Do we include numbers?
testFunc("Hello hi")  //Case sensitive? 

//STEP 3: Think about what to do with empty inputs or invalid inputs?
  // return empty object?
  // return null?
  // return an error message?
testFunc("")

//STEP 4: Pseudo-code

function charCountStep4(str){
  //Make empty object to return at the end.
  let histo = {}

  //loop over string, for each character...
    //downcase
    //if the character is a key in the object, increment count
    //if the character is not in object, add it and set value = 1
    //if character is something else (space, punctuation, etc.), don't do anything
  for(let i=0; i<str.length; i++ ){
    let current = str[i].toLowerCase();

    if (/[a-z0-9]/.test(current)) {
      if (histo[current]) {
        histo[current]++;
      } else {
        histo[current] = 1
      }
    }
  }

  //RETURN an object with keys that are lowercase alphanumeric characters in the string. Values should be integers that corresponds to the number of times that a character occurs in the string.
  return histo
}

//STEP 5: SIMPLIFY AND SOLVE
function charCountStep5(str){
  let histo = {}
  for (let i=0; i<str.length; i++){
    let current = str[i].toLowerCase();
    if(/[a-z0-9]/.test(current)){
      if (histo[current]){
        histo[current]++;
      } else {
        histo[current] = 1
      }
    }
  }
  return histo
}

//STEP 6: REFACTOR 
  //replace for loop with for...of
function charCountStep6(str){
  let histo = {}
  for (char of str){
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)){
      histo[char] = ++histo[char] || 1  //short-circuit assignment
    }
  }
  return histo
}