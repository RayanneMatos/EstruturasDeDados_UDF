from collections import deque

class ImpostoRendaFila:
    def __init__(self):
        self.fila = deque()

    def adicionar_cliente(self, nome, cpf):
        self.fila.append({"nome": nome, "cpf": cpf})
        print(f"Cliente {nome} adicionado à fila.")

    def atender_cliente(self):
        if self.fila:
            cliente = self.fila.popleft()
            print(f"Atendendo cliente: {cliente['nome']} (CPF: {cliente['cpf']})")
        else:
            print("Nenhum cliente na fila para atendimento.")

    def visualizar_fila(self):
        if not self.fila:
            print("A fila está vazia.")
        else:
            print("Clientes na fila:")
            for i, cliente in enumerate(self.fila, 1):
                print(f"{i}. {cliente['nome']} (CPF: {cliente['cpf']})")

# Exemplo de uso
fila_ir = ImpostoRendaFila()
fila_ir.adicionar_cliente("Maria Silva", "123.456.789-00")
fila_ir.adicionar_cliente("João Souza", "987.654.321-00")

fila_ir.visualizar_fila()
fila_ir.atender_cliente()
fila_ir.visualizar_fila()
