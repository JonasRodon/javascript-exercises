// isNumber

// Define a function called isNumber that receives a value and return true if the value received is a number
function isNumber (n) {
  if (isNaN(n)) {
    return false
  } else {
    return true
  }
}
isNumber(3) // true
isNumber('3') // false
isNumber('asass') // false
