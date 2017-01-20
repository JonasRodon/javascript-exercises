// Calculator

// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters
function calculator (s, n1, n2) {
  switch (s) {
    case 'suma':
      return n1 + n2
    case 'resta':
      return n1 - n2
    case 'multiplicacion':
      return n1 * n2
    case 'division':
      return n1 / n2
    default : break
  }
}

calculator('suma', 10, 5) // 15
calculator('resta', 10, 5) // 5
calculator('multiplicacion', 10, 5) // 50
calculator('division', 10, 5) // 2
