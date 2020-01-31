document.addEventListener("DOMContentLoaded", () => {
  const confirmation = document.getElementById("confirmation")
  confirmation.innerText = "Scripts loaded"
});

// ================================
// Write a function called same(), which accepts two arrays. 
// The function returns true if every value in array_one has its corresponding value squared in array_two
// The frequency of values must be the same 
// ================================

// My first pass
function sameV1(array1, array2){
  if (array1.length === array2.length){
    for (let i=0; i<array1.length; i++){
      if (array1[i] * array1[i] !== array2[i]) return false
    }
    return true
  } else {
    console.log("The arrays are not of equal length")
    return false
  }
}