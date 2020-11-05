/*
    Estrutura de dados Pilha
    Funcionamento: LIFO = Last In, First Out
    (o último a entrar é o primeiro a sair)
*/
module.exports = class Stack {
    
    constructor() {
        this.data = []  // Armazenamento
    }

    // Inserção
    push(value) {
        this.data.push(value)
    }

    // Remoção
    pop() {
        return this.data.pop()
    }

    // Verificação do topo da pilha ("olhadinha")
    peek() {
        return this.data[this.data.length - 1]
    }

    // Retorna o número de elementos da pilha
    size() {
        return this.data.length
    }
}