const LinkedList = require('./lib/LinkedList')

let lista = new LinkedList()
console.log(lista, lista.size())

lista.push('amarelo')
console.log(lista, lista.size())

lista.push('branco')
console.log(lista, lista.size())

lista.push('rosa')
console.log(lista, lista.size())

lista.push('azul')
console.log(lista, lista.size())
