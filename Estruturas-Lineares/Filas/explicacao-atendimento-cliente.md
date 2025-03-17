# Explicação do código:

1. Criamos a classe Fila, que representa uma fila usando um array (this.itens).

2. Implementamos os principais métodos de manipulação da fila:
    - entrarNaFila(cliente): Adiciona um cliente à fila.
    - atenderCliente(): Remove e retorna o primeiro cliente da fila.
    - proximoCliente(): Retorna o primeiro cliente sem removê-lo.
    - estaVazia(): Retorna true se a fila estiver vazia.
    - tamanhoDaFila(): Exibe e retorna o número de clientes na fila.
    - mostrarFila(): Exibe os clientes na fila.

3. Criamos um exemplo de uso simulando um sistema de atendimento.


### Saída Esperada no Console:

Cliente 1 entrou na fila.
Cliente 2 entrou na fila.
Cliente 3 entrou na fila.
Próximo a ser atendido: Cliente 1
Cliente 1 foi atendido.
Fila atual: [ 'Cliente 2', 'Cliente 3' ]
Cliente 2 foi atendido.
Cliente 3 foi atendido.
A fila está vazia. Nenhum cliente para atender.
Total de clientes na fila: 0
Esse exemplo mostra o funcionamento de uma fila de atendimento, como ocorre em bancos, supermercados ou serviços de suporte.