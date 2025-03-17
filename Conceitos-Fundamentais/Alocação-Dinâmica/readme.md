# Alocação Dinâmica de Memória

## O que é Alocação Dinâmica?

A **alocação dinâmica** de memória é o processo em que a quantidade de memória necessária para armazenar os dados de uma variável não é conhecida até o momento da **execução** do programa. Em vez de reservar uma quantidade fixa de memória durante a compilação, a memória é alocada **dinamicamente**, ou seja, a memória é solicitada ao sistema operacional enquanto o programa está em execução.

Esse tipo de alocação permite que o programa altere a quantidade de memória utilizada conforme necessário, oferecendo maior flexibilidade, especialmente em situações onde a quantidade de dados varia durante a execução do programa.

### Características da Alocação Dinâmica:
- **Tamanho variável**: A memória é alocada em tempo de execução e pode ser ajustada conforme a necessidade do programa.
- **Flexibilidade**: O programa pode pedir mais memória ou liberar memória enquanto estiver em execução, dependendo da situação.
- **Necessita de gerenciamento manual**: O programador é responsável por alocar e desalocar a memória, utilizando funções específicas para isso.

### Como Funciona a Alocação Dinâmica?

A alocação dinâmica é realizada através de funções específicas na linguagem, como `malloc()`, `calloc()`, `realloc()`, e `free()` em **C**. Essas funções permitem que o programa solicite a quantidade de memória necessária em tempo de execução e a libere quando não for mais necessária.

### Exemplo em C: Alocação Dinâmica de Memória

Em C, utilizamos a função `malloc()` para alocar memória de forma dinâmica. No exemplo alocacao-dinamica.c, a memória é alocada para um vetor de inteiros durante a execução do programa, e depois é liberada com a função `free()`.

#### Explicação do Exemplo:
- Alocação de Memória:

A função malloc() é usada para alocar 5 inteiros de memória. O tamanho de um inteiro é obtido com sizeof(int), garantindo que a quantidade de memória seja adequada para o tipo de dado.

- Inicialização e Exibição:

O vetor é inicializado com valores (multiplicando o índice por 10) e os valores são exibidos na tela.

- Desalocação de Memória:

Após o uso da memória alocada, a função free() é chamada para liberar a memória, evitando o vazamento de memória.

### Vantagens da Alocação Dinâmica:
    - Flexibilidade: A alocação dinâmica permite que a quantidade de memória seja ajustada conforme a necessidade do programa, tornando o uso de memória mais eficiente.
    - Uso eficiente da memória: Em vez de reservar um espaço fixo e possivelmente desperdiçar memória, a memória é alocada conforme a demanda do programa.

### Desvantagens da Alocação Dinâmica:
    - Gerenciamento manual: O programador deve garantir que a memória seja liberada adequadamente para evitar vazamentos de memória.
    - Desempenho: A alocação e desalocação dinâmica podem ser mais lentas do que a alocação estática, pois envolvem chamadas de sistema para obter e liberar memória.

**A alocação dinâmica de memória é uma técnica poderosa que permite maior flexibilidade e eficiência no uso da memória durante a execução de um programa. No entanto, ela exige cuidado do programador para garantir que a memória seja alocada corretamente e liberada quando não for mais necessária.**
