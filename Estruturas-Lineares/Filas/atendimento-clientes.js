class Fila {
    constructor() {
        this.itens = [];
    }

    // Adiciona um cliente à fila (enqueue)
    entrarNaFila(cliente) {
        this.itens.push(cliente);
        console.log(`${cliente} entrou na fila.`);
    }

    // Remove e retorna o primeiro cliente da fila (dequeue)
    atenderCliente() {
        if (this.estaVazia()) {
            console.log("A fila está vazia. Nenhum cliente para atender.");
            return null;
        }
        const clienteAtendido = this.itens.shift();
        console.log(`${clienteAtendido} foi atendido.`);
        return clienteAtendido;
    }

    // Consulta o primeiro cliente da fila (peek)
    proximoCliente() {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return null;
        }
        console.log(`Próximo a ser atendido: ${this.itens[0]}`);
        return this.itens[0];
    }

    // Verifica se a fila está vazia
    estaVazia() {
        return this.itens.length === 0;
    }

    // Retorna o tamanho da fila
    tamanhoDaFila() {
        console.log(`Total de clientes na fila: ${this.itens.length}`);
        return this.itens.length;
    }

    // Exibe o estado atual da fila
    mostrarFila() {
        console.log("Fila atual:", this.itens);
    }
}

// Exemplo de uso
const filaAtendimento = new Fila();

// Clientes chegando na fila
filaAtendimento.entrarNaFila("Cliente 1");
filaAtendimento.entrarNaFila("Cliente 2");
filaAtendimento.entrarNaFila("Cliente 3");

// Consultar próximo cliente
filaAtendimento.proximoCliente();

// Atender um cliente
filaAtendimento.atenderCliente();

// Mostrar fila atual
filaAtendimento.mostrarFila();

// Atender mais clientes
filaAtendimento.atenderCliente();
filaAtendimento.atenderCliente();

// Tentar atender quando a fila está vazia
filaAtendimento.atenderCliente();

// Checar o tamanho da fila
filaAtendimento.tamanhoDaFila();
