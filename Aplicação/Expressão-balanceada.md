# Verificação de Expressões Balanceadas com Pilha

## Descrição do Problema

Este programa resolve o problema de verificação de expressões matemáticas balanceadas. Uma expressão matemática é considerada balanceada se todos os parênteses, colchetes e chaves de abertura possuem um par de fechamento correspondente e estão na ordem correta.

### Exemplos:

- Expressão Balanceada: `(a + b) * {c + [d - e]}`
- Expressão Não Balanceada: `[(a + b])`

## Estrutura de Dados Utilizada: Pilha

Para resolver esse problema, usamos a estrutura de dados **pilha**, que segue o princípio **LIFO (Last In, First Out)**. A pilha é ideal para esse tipo de problema, pois podemos empilhar os símbolos de abertura e desempilhá-los conforme encontramos os símbolos de fechamento correspondentes.

Este código é uma implementação da função `is_balanced`, que verifica se uma expressão matemática (ou qualquer string que contenha parênteses, colchetes e chaves) está balanceada. O conceito de "balanceamento" aqui significa que cada símbolo de abertura (como `(`, `{`, `[`) deve ter um símbolo de fechamento correspondente (como `)`, `}`, `]`) e estes devem aparecer na ordem correta.

Vamos explicar passo a passo como o código funciona:

### 1. Definição da Função `is_balanced`
```python
def is_balanced(expression):
```
A função recebe uma string expression, que contém a expressão a ser verificada.

2. Inicialização da Pilha e Dicionário
```python
stack = []
matching_brackets = {')': '(', '}': '{', ']': '['}
```
- stack é uma lista que funcionará como uma pilha (stack). Essa pilha será usada para armazenar os símbolos de abertura encontrados na expressão.
- matching_brackets é um dicionário que mapeia os símbolos de fechamento para os símbolos de abertura correspondentes. Por exemplo, o parêntese ) está mapeado para o parêntese de abertura (.

- 3. Iteração sobre os Caracteres da Expressão
```python
for char in expression:
```
- O código começa a percorrer cada caractere da expressão fornecida. Cada caractere é verificado para ver se é um símbolo de abertura ou de fechamento.

4. Verificando Símbolos de Abertura
```python
if char in matching_brackets.values():  # Se for símbolo de abertura
    stack.append(char)
   ```
- Se o caractere atual for um símbolo de abertura (como (, { ou [), ele é adicionado à pilha usando o método append.

- matching_brackets.values() retorna todos os símbolos de abertura, ou seja, (, { e [. Se o caractere atual estiver nesse conjunto, ele é um símbolo de abertura.

5. Verificando Símbolos de Fechamento

```python
elif char in matching_brackets.keys():  # Se for símbolo de fechamento
    if stack and stack[-1] == matching_brackets[char]:  # Verificar correspondência
        stack.pop()
    else:
        return False  # Não corresponde ou pilha vazia
        ```
- Se o caractere for um símbolo de fechamento (como ), }, ]), o código verifica se a pilha não está vazia (ou seja, há um símbolo de abertura correspondente) e se o último elemento da pilha é o símbolo de abertura correspondente.

- stack[-1] acessa o último elemento da pilha.
- matching_brackets[char] retorna o símbolo de abertura correspondente ao símbolo de fechamento char.
- Se a correspondência for encontrada, o elemento da pilha é removido com stack.pop().
- Caso contrário, a função retorna False, indicando que a expressão não está balanceada (ou seja, há um erro na ordem dos símbolos de abertura e fechamento).

6. Verificando o Resultado Final

```python
return len(stack) == 0  # Se a pilha estiver vazia, a expressão é balanceada
```
- Após a iteração, se a pilha estiver vazia (len(stack) == 0), significa que todos os símbolos de abertura foram fechados corretamente, e a função retorna True (expressão balanceada).

- Se a pilha não estiver vazia, significa que há símbolos de abertura sem fechamento correspondente, e a função retorna False (expressão não balanceada).

7. Teste da Função
```python
expression = "(a + b) * {c + [d - e]}"
print("A expressão está balanceada?", is_balanced(expression))
```
- A variável expression contém a string (a + b) * {c + [d - e]}. A função is_balanced é chamada com essa expressão como argumento. O resultado será impresso, informando se a expressão está balanceada ou não.

# Explicação do Exemplo:
- A expressão (a + b) * {c + [d - e]} contém:

- Um parêntese de abertura ( e seu correspondente de fechamento ).
- Uma chave de abertura { e seu correspondente de fechamento }.
- Um colchete de abertura [ e seu correspondente de fechamento ].

# A função verificará:

1. O primeiro caractere é (, então é colocado na pilha.
2. O próximo caractere é a, então é ignorado.
3. O próximo caractere é +, então também é ignorado.
4. O próximo caractere é b, então é ignorado.
5. O próximo caractere é ), que corresponde ao último símbolo de abertura na pilha (o parêntese). Ele é removido da pilha.
6. O próximo caractere é *, que é ignorado.
7. O próximo caractere é {, então é colocado na pilha.
8. O próximo caractere é c, então é ignorado.
9. O próximo caractere é +, então é ignorado.
10. O próximo caractere é [, então é colocado na pilha.
11. O próximo caractere é d, então é ignorado.
12. O próximo caractere é -, então é ignorado.
13. O próximo caractere é e, então é ignorado.
14. O próximo caractere é ], que corresponde ao último símbolo de abertura na pilha (o colchete). Ele é removido da pilha.
15. O próximo caractere é }, que corresponde ao último símbolo de abertura na pilha (a chave). Ele é removido da pilha.

- No final, a pilha está vazia, o que significa que a expressão está balanceada. A função retorna True, e a saída será:

```css
A expressão está balanceada? True
```

# Conclusão:
Este código usa uma pilha para verificar se uma expressão com parênteses, colchetes e chaves está balanceada, o que é um problema comum de validação de sintaxes em várias linguagens de programação. A abordagem é eficiente e muito utilizada para esse tipo de verificação.
