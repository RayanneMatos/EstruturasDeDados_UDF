// Exemplo de alocação dinâmica em JavaScript

//Alocação Dinâmica é visível em estruturas de dados como arrays e objetos, onde o tamanho pode ser alterado durante a execução do programa.

// Criando um array de números dinamicamente
let numeros = [];  // Inicializando um array vazio

// Alocando elementos dinamicamente
numeros.push(10);
numeros.push(20);
numeros.push(30);

console.log("Array de números:", numeros);

// O array pode ser alterado a qualquer momento, adicionando ou removendo elementos
numeros.push(40);
console.log("Array após adicionar mais um número:", numeros);

// E a memória alocada pode ser ajustada conforme necessário
numeros.pop();  // Remove o último elemento
console.log("Array após remover um número:", numeros);
