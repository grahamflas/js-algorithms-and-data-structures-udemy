let array1 = [0, 3, 1, 2, 5, 4]
let array2 = [0, 2, 1, 5, 4, 3]
let array3 = [2, 5, 3, 0, 1, 4]


function swap(array, a, b){
  [ array[a], array[b] ] = [ array[b], array[a] ]
}

function bubbleSort(array){
  for(i=array.length; i > 0; i--){
    let noSwaps = true;
    for(j=0; j < i-1; j++){
      if (array[j] > array[j+1]){
        swap(array, j, j+1)
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array
}