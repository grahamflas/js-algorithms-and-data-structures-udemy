document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked-files")
  let li = document.createElement("li")
  li.innerText = "01_builtInJavaScriptSort.js"
  ul.append(li);
});

/*
Using the built-in sort method on arrays without passing it parameters often doesn't return the result we want:

console.log("Strings: \n",["Steele", "Colt", "Data Structures", "Algorithms"].sort())
console.log("Integers: \n",[6,4,15,10].sort())

*/

let statesArray = ["California", "Texas", "Florida", "New York", "Pennsylvania", "Illinois", "Ohio", "Georgia", "North Carolina", "Michigan", "New Jersey", "Virginia", "Washington", "Arizona", "Massachusetts", "Tennessee", "Indiana", "Missouri", "Maryland", "Wisconsin", "Colorado", "Minnesota", "South Carolina", "Alabama", "Louisiana", "Kentucky", "Oregon", "Oklahoma", "Connecticut", "Utah", "Iowa", "Nevada", "Arkansas", "Mississippi", "Kansas", "New Mexico", "Nebraska", "Idaho", "West Virginia", "Hawaii", "New Hampshire", "Maine", "Montana", "Rhode Island", "Delaware", "South Dakota", "North Dakota", "Alaska", "Vermont", "Wyoming"];

let intArray = [19, 16, 14, 8, 9, 1, 11, 18, 7, 12, 20, 13, 5, 17, 15, 4, 2, 10, 6, 3];

/*
  if function(a,b) => num && num<0 then a comes before b
  if function(a,b) => num && num===0 then a and b are left unchanged
  if function(a,b) => num && num>0 then b comes before a
*/

function ascending(a, b){
  return a - b;
}

function descending(a, b){
  return b - a;
}