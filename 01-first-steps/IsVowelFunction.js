// isVowel() function
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel (chart) {
  var r = /a|e|i|o|u/i
  // console.log(chart.match(r))
  if (chart.match(r)) {
    return true
  } else {
    return false
  }
}
isVowel('b')
