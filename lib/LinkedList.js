/*
    Estrutura de dados Lista Encadeada
*/
class Node {
    constructor(value) {
        this.data = value   // Armazenamento
        this.next = null    // Ponteiro para o próximo nodo
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null    // A lista inicia "sem cabeça"
        this.count = 0
    }

    // Inserção no fim da lista
    push(value) {
        let node = new Node(value)

        // Caso especial: a lista está vazia
        if(this.count === 0) {
            this.head = node
        }
        else {
            let nodePos = this.head
            // Percurso da lista para encontrar o último elemento
            while(nodePos.next != null) {
                nodePos = nodePos.next
            }
            // O último elemento ganha um nodo depois dele 
            nodePos.next = node
        }
        this.count++
    }

    // Retorna o tamanho da lista
    size() {
        return this.count
    }

    toString() {
        let output = '{ '
        let node = this.head
        while(node.next !== null) {
            output += node.data + ' '
        }
        output += ' }'
        return output
    }
}