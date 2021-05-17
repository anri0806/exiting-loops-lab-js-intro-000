function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
   array[i] = changeValue;
   if (array[i] !== stopValue) {
    break
     return array[i]
  }
  }
}

function keepGoing(array, changeValue, skipValue) {
  let hello = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
       hello = array[changeValue]
       return array
  }
}
