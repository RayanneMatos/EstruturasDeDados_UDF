# Dados de usuários
usuarios = [
    {"nome": "João", "idade": 30, "email": "joao@email.com"},
    {"nome": "Maria", "idade": 25, "email": "maria@email.com"},
    {"nome": "Pedro", "idade": 35, "email": "pedro@email.com"}
]

# Processamento: Calcular a idade média
idades = [usuario["idade"] for usuario in usuarios]
idade_media = sum(idades) / len(idades)

# Exibindo a informação
print(f"A idade média dos usuários é {idade_media} anos.")
