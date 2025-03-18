Definição do Problema:
No período de declaração do Imposto de Renda, contadores atendem vários clientes que precisam enviar suas declarações. Como o processo pode ser demorado e exige análise, é interessante organizar os clientes em uma fila para garantir que cada um seja atendido na ordem de chegada.

Estrutura de Dados Escolhida:
Utilizaremos a estrutura de fila (queue) para organizar os clientes que precisam declarar o Imposto de Renda. Cada cliente entra na fila e será atendido pelo contador na ordem de chegada (FIFO – First In, First Out). Isso reflete a dinâmica real de atendimento em escritórios contábeis.

O código em Python simula o funcionamento de uma fila de clientes em um escritório de Imposto de Renda.
Ele usa a classe ImpostoRendaFila e a estrutura de dados deque (deques) da biblioteca collections, que é ideal para operações de inserção e remoção de elementos de ambos os extremos de uma sequência. Vamos detalhar cada parte do código:

1. Importação da biblioteca deque
```python
from collections import deque
```

- Aqui, o código importa o deque (double-ended queue) da biblioteca collections. O deque é uma estrutura de dados eficiente para adicionar e remover elementos de ambos os lados (início e fim) da fila, o que é mais eficiente do que usar listas convencionais para filas.

2. Definição da classe ImpostoRendaFila

```python
class ImpostoRendaFila:
```
- A classe ImpostoRendaFila é criada para simular o controle de clientes em uma fila de atendimento. A classe tem três métodos principais: adicionar_cliente, atender_cliente e visualizar_fila.

3. Método __init__

```python
def __init__(self):
    self.fila = deque()
```
- O método __init__ é o construtor da classe. Ele é chamado quando uma instância da classe é criada. O self.fila = deque() inicializa a fila como um deque vazio, que irá armazenar os clientes que são adicionados.

4. Método adicionar_cliente

```python
def adicionar_cliente(self, nome, cpf):
    self.fila.append({"nome": nome, "cpf": cpf})
    print(f"Cliente {nome} adicionado à fila.")
```
   
- O método adicionar_cliente recebe o nome e o CPF do cliente como parâmetros.
- Ele adiciona o cliente à fila usando o método append do deque, que insere o elemento (o cliente) no final da fila.
- O cliente é armazenado como um dicionário, com as chaves "nome" e "cpf".
- Uma mensagem é exibida confirmando que o cliente foi adicionado à fila.

5. Método atender_cliente

``` python

def atender_cliente(self):
    if self.fila:
        cliente = self.fila.popleft()
        print(f"Atendendo cliente: {cliente['nome']} (CPF: {cliente['cpf']})")
    else:
        print("Nenhum cliente na fila para atendimento.")
   ```
O método atender_cliente verifica se há clientes na fila (if self.fila).
Se a fila não estiver vazia, ele usa o método popleft para remover o primeiro cliente da fila (respeitando a política FIFO – First In, First Out).
Em seguida, exibe o nome e o CPF do cliente que está sendo atendido.
Se a fila estiver vazia, exibe uma mensagem informando que não há clientes para atender.


7. Método visualizar_fila

```python
def visualizar_fila(self):
    if not self.fila:
        print("A fila está vazia.")
    else:
        print("Clientes na fila:")
        for i, cliente in enumerate(self.fila, 1):
            print(f"{i}. {cliente['nome']} (CPF: {cliente['cpf']})")
```

- O método visualizar_fila verifica se a fila está vazia.
- Se a fila estiver vazia, exibe a mensagem "A fila está vazia".
- Caso contrário, ele percorre todos os clientes na fila e os exibe numerados, mostrando o nome e o CPF de cada um. Isso é feito com o enumerate, que retorna o índice e o cliente.

7. Exemplo de uso

```python
fila_ir = ImpostoRendaFila()
fila_ir.adicionar_cliente("Maria Silva", "123.456.789-00")
fila_ir.adicionar_cliente("João Souza", "987.654.321-00")

fila_ir.visualizar_fila()
fila_ir.atender_cliente()
fila_ir.visualizar_fila()
```

- Uma instância da classe ImpostoRendaFila é criada (fila_ir).
- Dois clientes são adicionados à fila utilizando o método adicionar_cliente.
- O método visualizar_fila é chamado para mostrar os clientes na fila.
- O método atender_cliente é chamado para atender o primeiro cliente da fila (no caso, "Maria Silva").
- Após o atendimento, o método visualizar_fila é chamado novamente para mostrar a fila atualizada.

## Saída esperada do código:

```Python
Cliente Maria Silva adicionado à fila.
Cliente João Souza adicionado à fila.
Clientes na fila:
1. Maria Silva (CPF: 123.456.789-00)
2. João Souza (CPF: 987.654.321-00)
Atendendo cliente: Maria Silva (CPF: 123.456.789-00)
Clientes na fila:
1. João Souza (CPF: 987.654.321-00)
```

## Explicação dos Métodos:
- adicionar_cliente: Adiciona um cliente à fila no final.
- atender_cliente: Atende o primeiro cliente da fila, removendo-o.
- visualizar_fila: Exibe os clientes na fila de forma ordenada.

# Conclusão:
O código simula uma fila de atendimento de clientes, permitindo adicionar clientes à fila, atendê-los na ordem de chegada e visualizar o status da fila. O uso do deque facilita a manipulação eficiente da fila, tornando as operações de inserção e remoção mais rápidas em comparação com outras implementações que utilizam listas convencionais.
