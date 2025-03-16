import time

# Exemplo sem uso eficiente de estrutura de dados
def busca_sem_estrutura(lista, valor):
    for item in lista:
        if item == valor:
            return True
    return False

# Exemplo usando conjunto (estrutura otimizada para buscas)
def busca_com_estrutura(conjunto, valor):
    return valor in conjunto

# Criando uma lista grande
dados = list(range(1, 1000000))

# Testando tempo de busca em lista (O(n))
inicio = time.time()
busca_sem_estrutura(dados, 999999)
fim = time.time()
print(f"Busca sem estrutura otimizada: {fim - inicio:.5f} segundos")

# Testando tempo de busca em conjunto (O(1) em média)
dados_set = set(dados)
inicio = time.time()
busca_com_estrutura(dados_set, 999999)
fim = time.time()
print(f"Busca com estrutura otimizada: {fim - inicio:.5f} segundos")
