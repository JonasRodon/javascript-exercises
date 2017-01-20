// Multiplications table on demand

// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function MultiplicationsTable (number) {
  var res = ''
  for (var i = 1; i <= 10; i++) {
    res += (i * number) + ' '
  }
  return res
}
MultiplicationsTable(5)
