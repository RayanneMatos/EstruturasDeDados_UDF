# Pilha (Stack) – O que é e como funciona?

## O que é uma Pilha?
Uma pilha (stack) é uma estrutura de dados linear, ou seja, seus elementos estão organizados de forma sequencial. A principal característica da pilha é que ela segue o princípio LIFO (Last In, First Out), que significa Último a Entrar, Primeiro a Sair. Em outras palavras, o último elemento inserido na pilha será o primeiro a ser removido. Para visualizar, imagine uma pilha de livros: você coloca um novo livro no topo e, para retirar, precisa pegar primeiro o que está no topo.

Exemplo
Se tivermos a sequência de inserções de elementos como A, B e C, a pilha ficará assim:

```css
3Topo
  C
  B
  A
Base
```

Neste caso, se quisermos remover um elemento da pilha, o último elemento inserido (C) será o primeiro a ser removido. Depois disso, B será removido, e assim por diante.

## Para que serve uma Pilha?
As pilhas são utilizadas em muitos contextos diferentes na computação, desempenhando um papel importante em operações que envolvem controle de fluxo e manipulação de dados. Aqui estão alguns exemplos de como as pilhas são aplicadas:

- Histórico de navegação em navegadores: Quando você navega na internet, os navegadores mantêm um histórico das páginas que você acessou. O último site visitado é o primeiro a ser mostrado quando você clica no botão "voltar", o que é uma operação típica de uma pilha.

- Undo/Redo (Desfazer/Refazer): Em programas de edição, como editores de texto e gráficos, as pilhas são usadas para armazenar as últimas ações realizadas. Quando você clica em "desfazer", o último comando inserido é removido; ao clicar em "refazer", o comando reaparece, e o processo de desfazer é repetido.

- Execução de funções (Stack de chamadas): Quando um programa executa funções, cada chamada de função é colocada na pilha de chamadas. Quando uma função é concluída, ela é removida da pilha, e o controle retorna à função que foi chamada antes dela. Esse processo é essencial para a execução de recursões, onde uma função se chama repetidamente.

- Conversão de expressões matemáticas: Pilhas são usadas para converter expressões matemáticas entre diferentes notações, como a conversão de notação infixa (ex: 3 + 4) para pós-fixa (ex: 3 4 +). A pilha ajuda a organizar os operadores e operandos de forma correta.

## Vantagens da Pilha
As pilhas apresentam diversas vantagens, especialmente quando se trata de simplicidade e eficiência nas operações:

- Simples de implementar: As operações básicas em uma pilha, como inserção (push) e remoção (pop) de elementos, são muito eficientes, com uma complexidade de tempo O(1), ou seja, a execução dessas operações não depende do número de elementos na pilha.

- Controle de fluxo e recursão: Pilhas são fundamentais no controle de fluxo, especialmente quando lidamos com recursão. Cada chamada de função é empilhada, e à medida que a função termina, ela é desempilhada. Esse comportamento é ideal para resolver problemas como algoritmos de busca e processamento de expressões.

- Facilidade para reverter ações: Em muitas situações, como em editores de texto ou navegação, a pilha ajuda a garantir que as ações possam ser revertidas de forma organizada e eficiente, mantendo o histórico das interações.

## Desvantagens da Pilha
Apesar das vantagens, o uso de pilhas também apresenta algumas limitações e desvantagens:

- Acesso limitado: Diferente de outras estruturas de dados, como listas ou arrays, onde podemos acessar qualquer elemento diretamente, em uma pilha, somente o topo da pilha pode ser acessado. Isso significa que, para acessar qualquer elemento abaixo do topo, seria necessário remover os elementos acima dele, o que pode ser ineficiente em algumas situações.

- Capacidade limitada: Em implementações de pilhas estáticas, como aquelas que têm um tamanho fixo definido pelo programador, a pilha pode atingir um limite de elementos. Caso mais elementos sejam adicionados após esse limite, ocorre o overflow da pilha (stack overflow), resultando em erros no programa. Pilhas dinâmicas, que podem expandir conforme necessário, evitam esse problema, mas ainda assim podem ser limitadas pela memória disponível.

- Uso de memória: Como as pilhas armazenam as informações de maneira sequencial, elas podem ocupar muita memória, especialmente em casos de recursão profunda, em que cada chamada de função ocupa um espaço na pilha de chamadas.


## Manipulação de Pilhas

1. Inserção (Push)
Adiciona um elemento no topo da pilha.

```python
stack = []
stack.append(10)
stack.append(20)
stack.append(30)
print(stack)  # Saída: [10, 20, 30]
```

2. Remoção (Pop)
Remove o elemento do topo da pilha.

```python
stack = [10, 20, 30]
top = stack.pop()
print(top)  # Saída: 30
print(stack)  # Saída: [10, 20]
```

3. Consulta do Topo (Peek/Top)
Obtém o elemento no topo da pilha sem removê-lo.

```python

stack = [10, 20, 30]
top = stack[-1]
print(top)  # Saída: 30
```

4. Verificar se está Vazia (isEmpty)
Checa se a pilha está vazia.

```python
stack = []
if not stack:
    print("A pilha está vazia")  # Saída: A pilha está vazia
else:
    print("A pilha contém elementos")
```

5. Tamanho da Pilha (size)
Retorna a quantidade de elementos na pilha.

```python
stack = [10, 20, 30]
print(len(stack))  # Saída: 3
```

## Conclusão
A pilha é uma estrutura de dados simples, mas poderosa, com aplicações práticas essenciais na programação e computação em geral. Sua implementação simples e eficiência nas operações básicas a tornam fundamental em muitos sistemas, embora seu uso seja restrito em termos de acesso e capacidade. Compreender como e onde usar pilhas é um passo importante para quem deseja aprofundar seus conhecimentos em estrutura de dados e programação.