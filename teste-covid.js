let passadas = 0, comparacoes = 0, trocas = 0
/*
    fnComp -> Compara dois elementos do vetor
    Recebe dois valores do vetor
    Retorna:
        - true, se o PRIMEIRO valor for MAIOR que o segundo
        - false, caso contrário
*/
function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length - 1) {
    //console.log({vetor, inicio, fim})
    if(fim > inicio) {  // Garante que haja, PELO MENOS, DOIS elementos para ordenar
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim
        for(let i = inicio; i < fim; i++) {
            comparacoes++
            //if(vetor[i] < vetor[posPivot]) {
            if(fnComp(vetor[posPivot], vetor[i])) {     // Parâmetros invertidos
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++
        quickSort(vetor, fnComp, inicio, posDiv - 1)    // Lado esquerdo
        quickSort(vetor, fnComp, posDiv + 1, fim)       // Lado direito
    }
}

/*
let nums = [90, 81, 72, 63, 54, 45, 36, 27, 18, 9]
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})
*/


const covid19 = require('./dados/covid-19')
console.time('Teste COVID-19')
//quickSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)

quickSort(covid19, (a, b) => {
    // Ordenação considerando primeiro NR_CANDIDATO e depois NM_CANDIDATO
    if(a.date == b.date) {
        if(a.state == b.state) {
            if(a.city > b.city) return true
            else return false
        }
        else if (a.state > b.state) return true
        else return false
    }
    else if(a.date > b.date) return true
    else return false
})

console.timeEnd('Teste COVID-19')
console.log(covid19)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({passadas, comparacoes, trocas})
