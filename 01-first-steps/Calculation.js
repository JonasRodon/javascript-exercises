// Calculation

// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
function Calculation () {
  var numeros = 0
  for (var i = 23; i < 500; i++) {
    if (i % 23) {
      numeros += i
    }
  }
  return numeros
}
Calculation()
