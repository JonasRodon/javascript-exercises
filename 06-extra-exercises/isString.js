// isString

// Define a function called isString that receives a value and return true if the value received is a string
function isString (s) {
  if (isNaN(s)) {
    return true
  } else {
    return false
  }
}
isString(3) // false
isString('3') // true
isString('asass') // true
