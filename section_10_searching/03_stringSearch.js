document.addEventListener("DOMContentLoaded", () => {
  let linkedFiles = document.getElementById("linked-files")
  let thisFile = document.createElement("li")
  thisFile.innerText = "03_stringSearch.js"
  linkedFiles.append(thisFile)
});

//Naive String Search
/*
PSEUDO CODE
__ loop over larger string
__ loop over shorter string
__ if the characters don't match, break out of inner loop
__ if the characters do match, keep going
__ if you complete the inner loop, you've found a match .: increment counter
__ return count
*/

//First Pass
function myNaiveStringSearch(string, pat){
  let match = 0
  for (i=0; i<string.length; i++){
    for (j=0; j<pat.length; j++){
      if (string[i+j] !== pat[j]) break
      if (j === pat.length-1){
        match += 1
      }
    }
  }
  return match
}

