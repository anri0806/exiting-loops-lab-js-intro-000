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
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
      array[i.length] = changeValue
      return array
  }
}
