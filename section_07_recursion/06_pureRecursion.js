document.addEventListener("DOMContentLoaded", () => {
  let conf = document.getElementById("conf");
  conf.innerText = "scripts loaded"
});

function collectOddValues(arr){
  //recursive calls to collectOddValues results in (n = arr.length) arrays that are either empty if even or contain a single odd number
  //concatenate all of these arrays into a single array at the end and return it.
  let newArray = [];

  if (arr.length === 0) return newArray;

  if(arr[0] % 2 !== 0){
    newArray.push(arr[0])
  }

  newArray = newArray.concat( collectOddValues(arr.slice(1)) ) 
  return newArray;
}

collectOddValues([1,2,3,4,5])

/*
Here's what's happening:

[1].concat( collectOddValues([2,3,4,5]) )
    [].concat( collectOddValues([3,4,5]) )
      [3].concat( collectOddValues([4,5]) )
        [].concat( collectOddValues([5]) )
          [5].concat( collectOddValues[] )
            []
*/