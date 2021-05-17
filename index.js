function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
   array[i] = changeValue;
   if (array[i] !== stopValue) {
    break
  }
  }
    return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
      array[i] = changeValue
  }
      return array
}
