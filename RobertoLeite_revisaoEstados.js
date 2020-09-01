//Criação dos objetos e inserção de dados
//no vetor através do .push()

let estadosNe = []

let estse = {
    estado: 'Sergipe',
    sigla: 'SE',
    area: 21915.08,
    populacao: 2278308    
}
     

let estal = {
    estado: 'Alagoas',
    sigla: 'AL',
    area: 27848.14,
    populacao: 3322820
}

estadosNe.push(estal)

let estrn = {
    estado: 'Rio Grande do Norte', 
    sigla: 'RN',
    area: 52811.05,
    populacao: 3479010
}

estadosNe.push(estrn)

let estpb = {
    estado: 'Paraíba',
    sigla: 'PB',
    area: 56469.78,
    populacao: 3996496
}

estadosNe.push(estpb)

let estpe = {
    estado: 'Pernambuco',
    sigla: 'PE',
    area: 98148.32,
    populacao: 9496294
}

estadosNe.push(estpe)

let estce = {
    estado: 'Ceará',
    sigla: 'CE',
    area: 148920.47,
    populacao: 9075649
}

estadosNe.push(estce)

let estpi = {
    estado: 'Piauí',
    sigla: 'PI',
    area: 251577.74,
    populacao:3264531 
}

estadosNe.push(estpi)

let estma = {
    estado: 'Maranhão',
    sigla: 'MA',
    area: 331937.45,
    populacao: 7035055
}

estadosNe.push(estma)

let estba = {
    estado: 'Bahia',
    sigla: 'BA',
    area: 564733.18,
    populacao: 14812617
}

estadosNe.push(estba);

console.log(estadosNe);
console.log('----------------------------------------')

//2 Escreva uma arrow function que receba dois parâmetros, área e população, e
//  calcule a densidade demográfica retornando o resultado da divisão da
//  segunda pela primeira.

let densdem = (area, populacao) => populacao / area;

//3   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      //chame a arrow function criada em 2) e efetue o cálculo correspondente.
      //Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      //demográfica' para cada objeto representando um Estado.
      //Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

for (let n = 0; n < estadosNe.lenght; n++) {
    let dens = densdem(estadosNe[n].area, estadosNe[n].populacao)
    estadosNe[n]['densidade demográfica'] = dens
    delete estadosNe[n].sigla
    
};


//4) Escreva uma arrow function que receba um objeto. Na função, use for..in
// para extrair as propriedades e seus valores e exibi-los com console.log().

let exibicaoProp = estado => {
    for(let propriedade in estado) {
        console.log(`Propriedade: ${propriedade}; Valor: ${estado[propriedade]}`)        
    }
};

console.log('------------------------------------------')

//5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
//  invoque a função escrita em 4) para exibi-lo.

for (let estado of estadosNe) {
    exibicaoProp(estado)
};

console.log('------------------------------------------')
//6)    a) Declare um vetor vazio.
//      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
//         os dados no topo deste arquivo, um de cada vez. Faça as inserções de
//         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro
//         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
//         deve ser inserido com unshift(), para manter a ordem alfabética.
//         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois
//         já existentes, e assim por diante.

let nomeEst = []
nomeEst.push('Sergipe')
nomeEst.unshift('Alagoas')
nomeEst.splice(1,0,'Rio Grande do Norte')
nomeEst.splice(1,0,'Paraíba')
nomeEst.splice(2,0,'Pernambuco')
nomeEst.splice(1,0,'Ceará')
nomeEst.splice(4,0,'Piauí')
nomeEst.splice(2,0,'Maranhão')
nomeEst.splice(1,0,'Bahia')

console.log (nomeEst)









