// Multiplications table

// Write a function that writes in the console the multiplication table (from 1 to 10)
function MultiplicationsTable () { // eslint-disable-line no-unused-vars
  var res = ''
  for (var i = 0; i <= 10; i++) {
    for (var j = 0; j <= 10; j++) {
      res += (i * j) + ' '
    }
    res += '\n'
  }
  return res
}
