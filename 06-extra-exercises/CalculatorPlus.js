// Calculator Plus

// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters
function calculator () {
  var res
  var eleccion = arguments[0]
  switch (eleccion) {
    case 'suma':
      res = arguments[1]
      for (var s = 2; s < arguments.length; s++) {
        res += arguments[s]
        console.log('contador es ' + s + ' res es ' + res)
      }
      return res
    case 'resta':
      res = arguments[1]
      for (var r = 2; r < arguments.length; r++) {
        res -= arguments[r]
        console.log('contador es ' + r + ' res es ' + res)
      }
      return res
    case 'multiplicacion':
      res = arguments[1]
      for (var m = 2; m < arguments.length; m++) {
        res *= arguments[m]
        console.log('contador es ' + s + ' res es ' + res)
      }
      return res
    case 'division':
      res = arguments[1]
      for (var d = 2; d < arguments.length; d++) {
        res /= arguments[d]
        console.log('contador es ' + s + ' res es ' + res)
      }
      return res
    default: break
  }
}
calculator('suma', 10, 5, 2, 3) // 20
calculator('resta', 10, 5, 1) // 4
calculator('multiplicacion', 10, 5, 2) // 100
calculator('division', 10, 5) // 2
