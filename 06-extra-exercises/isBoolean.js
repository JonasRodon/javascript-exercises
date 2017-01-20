// isBoolean

// Define a function called isBoolean that receives a value and return true if the value received is a boolean
function isBoolean (b) {
  if (typeof b === 'boolean') {
    return true
  } else {
    return false
  }
}

isBoolean(3) // false
isBoolean('true') // false
isBoolean(true) // true
