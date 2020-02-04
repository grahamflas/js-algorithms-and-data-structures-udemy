document.addEventListener("DOMContentLoaded", () => {
  let body = document.getElementsByTagName('body')
  let p = document.createElement('p')
  p.innerText = "Scripts loaded"
  document.body.appendChild(p)
});

/*
      ========================
      Given two strings, write a function to determine if the second string is an anagram of the first. 
      An anagram is a word, phrase, or name formed by rearranging the letters of another, such as `cinema` formed from `iceman`
      ========================
 */

//FIRST IMPLEMENTATION

  //If word 2 is an anagram of word 1, it must have the same letter in the same frequency
    // _x_confirm that the words are of equal length

    // _x_count the letters in word 1, collect in object
    // _x_count the letters in word 2, collect in object

    // _x_Confirm that each key in object1 is present in object2
      //x__Confirm that for each key in object 1, its value is the same in object2

function isAnagram(str1, str2){
  if (str1.length !== str2.length) return false;

  let frequency1 = {};
  let frequency2 = {};

  for (let i=0; i<str1.length; i++){
    let char = str1[i]
    frequency1[char] = (frequency1[char] || 0) + 1;
  }
  
  for (let i=0; i<str2.length; i++){
    let char = str2[i]
    frequency2[char] = (frequency2[char] || 0) + 1;
  }

  for (let key in frequency1){
    if (key in frequency2 === false) return false;
    if (frequency1[key] !== frequency2[key]) return false;
  }

  return true;
}