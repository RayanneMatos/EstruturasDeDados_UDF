# Alocação Estática de Memória

## O que é Alocação Estática?

A **alocação estática** de memória ocorre quando a quantidade de memória necessária para armazenar os dados de uma variável é conhecida no momento da **compilação**. Ou seja, o tamanho da memória é fixo e determinado antes do programa ser executado. Esse tipo de alocação é comum em linguagens como **C** e **C++**, onde as variáveis são alocadas de forma estática durante a compilação.

Na alocação estática, a memória é reservada para as variáveis no início da execução do programa e não pode ser alterada durante o processo de execução. Isso implica que o espaço alocado para a variável é fixo durante toda a execução do programa.

### Características da Alocação Estática:
- **Tamanho fixo**: O tamanho de cada variável é determinado em tempo de compilação.
- **Sem flexibilidade**: O tamanho da memória alocada não pode ser alterado enquanto o programa está rodando.
- **Menor sobrecarga**: Como a alocação de memória é feita antes da execução, o processo é mais rápido e simples.

### Exemplo em Python (simulando alocação estática)

Em Python, a alocação de memória é dinâmica por padrão, mas podemos simular o comportamento de alocação estática, onde o tipo e o tamanho da variável são fixos.

```python
# Alocação Estática Simulada
idade = 30  # Variável do tipo inteiro (fixo)
nome = "João"  # Variável do tipo string (fixo)
altura = 1.75  # Variável do tipo float (fixo)

# Exibindo os valores armazenados
print(f"Nome: {nome}, Idade: {idade}, Altura: {altura}")
```

Exemplo de Linguagem C (para alocação estática real)
Em C, a alocação estática de memória é feita diretamente ao declarar a variável.

```c
#include <stdio.h>

int main() {
    int idade = 30;  // Alocação estática para o tipo inteiro
    char nome[] = "João";  // Alocação estática para string (vetor de caracteres)
    float altura = 1.75;  // Alocação estática para o tipo float

    printf("Nome: %s, Idade: %d, Altura: %.2f\n", nome, idade, altura);
    return 0;
}
```

# Vantagens da Alocação Estática:
    - Eficiência: Como a memória é alocada antes da execução, o programa é mais rápido ao acessar as variáveis.
    - Simplicidade: A alocação estática é simples e direta, sem necessidade de gerenciar a alocação em tempo de execução.

# Desvantagens da Alocação Estática:
    - Falta de flexibilidade: Não é possível alterar o tamanho da memória alocada durante a execução do programa.
    - Desperdício de memória: Se o tamanho da variável não for corretamente estimado, pode ocorrer desperdício de memória.

# Referências
PIVA JUNIOR, Dilermando; NAKAMITI, Gilberto Shigueo; FREITAS, Ricardo Luís de; XASTRE, Leandro Alonso; BIANCHI, Francisco. Estrutura de dados e técnicas de programação. 1. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7437-0. Disponível em: https://www.kufunda.net/publicdocs/Estrutura%20de%20Dados%20e%20T%C3%A9cnicas%20de%20Programa%C3%A7%C3%A3o%20(Francisco%20Bianchi).pdf. Acesso em: 16 mar. 2025.