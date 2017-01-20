// encodeWord

// Define a function called encodeWord that receives a string and return the codified version of that string replacing the following characters:

    // 7 instead of T
    // 4 instead of A
    // 5 instead of S
    // 0 instead of O
  function encode (txt) {
    var caracter = ''
    var scaracter = ''
    for (var i = 0; i < txt.length; i++) {
      caracter = txt[i].toLowerCase()
      scaracter += Cambiazo(caracter)
      if (i % 7 === 0) { scaracter += getRandomArbitrary(0, 1001) }
    }
      //  Retorna un número aleatorio entre min (incluido) y max (excluido)
    function getRandomArbitrary (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }
    function Cambiazo (caracter) { // eslint-disable-line no-unused-vars
      if (caracter === 't') {
        // scaracter = caracter
        scaracter = caracter.replace(caracter, '7')
        // console.log(caracter)
        return scaracter
      } else if (caracter === 'a') {
        scaracter = caracter.replace(caracter, '4')
        // console.log(caracter)
        return scaracter
      } else if (caracter === 's') {
        scaracter = caracter.replace(caracter, '5')
        // console.log(caracter)
        return scaracter
      } else if (caracter === 'o') {
        scaracter = caracter.replace(caracter, '0')
        // console.log(caracter)
        return scaracter
      } else {
        scaracter = caracter
        // console.log(caracter)
        return scaracter
      }
    }
    return scaracter
  }
  encode('Caminante, son tus huellas el camino y nada más;Caminante, no hay camino,se hace camino al andar.Al andar se hace el camino,y al volver la vista atrás se ve la senda que nun case ha de volver a pisar. Caminante no hay camino sino estelas en la mar.')
