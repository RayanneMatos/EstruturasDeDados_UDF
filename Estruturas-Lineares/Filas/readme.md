# Fila (Queue) – O que é e como funciona?

## O que é uma Fila?
Uma fila (queue) é uma estrutura de dados linear que segue o princípio FIFO (First In, First Out), ou seja, o primeiro elemento inserido será o primeiro a ser removido.

Podemos comparar uma fila com uma fila de espera em um banco ou supermercado: a primeira pessoa que entra na fila é a primeira a ser atendida, enquanto novas pessoas entram no final da fila e aguardam sua vez.

Exemplo
Se tivermos a sequência de inserção de elementos A, B e C, a fila ficará assim:

```css
Frente  ->  A  B  C  <- Final
```

Quando removemos um elemento da fila, o primeiro que entrou (A) será retirado, seguido por B e depois C.

## Para que serve uma Fila?
As filas são utilizadas em diversas situações que exigem processamento ordenado, garantindo que os elementos sejam atendidos na mesma sequência em que chegaram.

Exemplos práticos de uso:
- Gerenciamento de processos em sistemas operacionais:

O escalonador de CPU usa filas para determinar a ordem de execução dos processos.
Impressoras utilizam filas para imprimir documentos na sequência em que foram enviados.

- Filas de atendimento em sistemas de suporte e call centers:

Chamadas são atendidas na ordem em que foram recebidas.

- Transmissão de dados em redes de computadores:

Pacotes de dados são transmitidos e processados na ordem correta para evitar falhas de comunicação.

- Filas de mensagens em sistemas distribuídos:

Mensagens em filas assíncronas (como RabbitMQ, Kafka) são entregues e processadas sem perda da ordem original.


## Vantagens da Fila
- Execução ordenada – Garante que os elementos sejam processados na sequência correta.

- Útil para sistemas concorrentes – Muito usada em multitarefas, filas de eventos e mensagens assíncronas.

- Boa eficiência – Inserção e remoção são rápidas e podem ter complexidade O(1) em implementações otimizadas.

## Desvantagens da Fila
- Acesso restrito – Apenas o primeiro elemento pode ser acessado diretamente, dificultando buscas e operações aleatórias.

- Possível desperdício de espaço – Em filas estáticas, pode haver alocação de memória fixa que não é totalmente utilizada.

- Reorganização necessária – Em algumas implementações, ao remover elementos, a fila precisa ser deslocada para manter a ordem.

## Tipos de Filas
- Fila Simples: Elementos são inseridos no final e removidos do início.
- Fila Circular: A última posição se conecta à primeira para reaproveitar espaço.
- Fila Dupla (Deque – Double-Ended Queue): Permite inserção e remoção em ambos os extremos.
- Fila de Prioridade: Elementos são processados com base em prioridade, não apenas na ordem de chegada.

## Manipulação de Fila
1. Inserção (Enqueue)
Adiciona um elemento ao final da fila.

```python
from collections import deque

fila = deque()
fila.append(10)
fila.append(20)
fila.append(30)

print(fila)  # Saída: deque([10, 20, 30])
```


2. Remoção (Dequeue)
Remove o primeiro elemento da fila.

```python
fila = deque([10, 20, 30])
primeiro = fila.popleft()

print(primeiro)  # Saída: 10
print(fila)  # Saída: deque([20, 30])
```

3. Consulta do Primeiro Elemento (Peek/Front)
Verifica o primeiro elemento da fila sem removê-lo.

```python
fila = deque([10, 20, 30])
print(fila[0])  # Saída: 10
```

4. Consulta do Último Elemento (Rear)
Verifica o último elemento da fila sem removê-lo.

```python
fila = deque([10, 20, 30])
print(fila[-1])  # Saída: 30
```

5. Verificar se a Fila está Vazia
Checa se a fila tem elementos ou não.

```python
fila = deque()
if not fila:
    print("A fila está vazia")  # Saída: A fila está vazia
```

6. Obter o Tamanho da Fila
Retorna a quantidade de elementos na fila.

```ython
fila = deque([10, 20, 30])
print(len(fila))  # Saída: 3
```

7. Esvaziar a Fila
Remove todos os elementos da fila.

```python
fila = deque([10, 20, 30])
fila.clear()

print(fila)  # Saída: deque([])
```

8. Percorrer os Elementos da Fila
Itera sobre os elementos da fila.

```python
fila = deque([10, 20, 30])
for elemento in fila:
    print(elemento)
# Saída:
# 10
# 20
# 30
```

## Conclusão
As filas são essenciais para organizar tarefas de forma sequencial e são amplamente usadas em computação, redes e processamento de dados. Embora tenham limitações no acesso direto a elementos internos, seu funcionamento eficiente e previsível faz delas uma escolha ideal para muitos sistemas.