# Verificação de Expressões Balanceadas com Pilha

## Descrição do Problema

Este programa resolve o problema de verificação de expressões matemáticas balanceadas. Uma expressão matemática é considerada balanceada se todos os parênteses, colchetes e chaves de abertura possuem um par de fechamento correspondente e estão na ordem correta.

### Exemplos:

- Expressão Balanceada: `(a + b) * {c + [d - e]}`
- Expressão Não Balanceada: `[(a + b])`

## Estrutura de Dados Utilizada: Pilha

Para resolver esse problema, usamos a estrutura de dados **pilha**, que segue o princípio **LIFO (Last In, First Out)**. A pilha é ideal para esse tipo de problema, pois podemos empilhar os símbolos de abertura e desempilhá-los conforme encontramos os símbolos de fechamento correspondentes.

### Como Funciona:

1. A pilha começa vazia.
2. A cada símbolo de abertura `(`, `{` ou `[`, ele é empilhado.
3. Quando encontramos um símbolo de fechamento `)`, `}` ou `]`, verificamos se ele corresponde ao topo da pilha. Se sim, removemos o topo da pilha. Caso contrário, a expressão está desbalanceada.
4. Se a pilha estiver vazia no final, a expressão é balanceada. Caso contrário, não é.

## Como Rodar o Programa:

1. Clone este repositório.
2. Execute o arquivo `balanced_parentheses.py` para testar a verificação de expressões balanceadas.

```bash
python balanced_parentheses.py
```