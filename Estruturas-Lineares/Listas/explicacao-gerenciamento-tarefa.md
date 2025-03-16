# Caso Real: Gerenciamento de Tarefas
Imagine que temos uma lista de tarefas e queremos realizar algumas manipulações comuns, como adicionar novas tarefas, remover tarefas feitas, ordenar as tarefas por prioridade e listar as tarefas restantes.

Explicação do Código:
Criação da Lista:

A lista tarefas contém objetos, cada um representando uma tarefa com três propriedades: tarefa (descrição), prioridade (um número indicando a prioridade da tarefa, onde 1 é a mais alta), e feito (um booleano indicando se a tarefa foi concluída ou não).

# Funções de Manipulação:

adicionarTarefa(): Adiciona uma nova tarefa à lista com a prioridade especificada.
removerTarefa(): Remove uma tarefa da lista. A busca é feita pelo nome da tarefa.
marcarTarefaComoFeita(): Marca uma tarefa como concluída, alterando a propriedade feito para true.
listarTarefasPendentes(): Exibe todas as tarefas que ainda não foram concluídas.
ordenarTarefasPorPrioridade(): Ordena as tarefas pela propriedade prioridade em ordem crescente (prioridade 1 vem antes da prioridade 2, e assim por diante).
listarTarefas(): Exibe todas as tarefas com seu status (feita ou pendente) e a prioridade.

# Exemplo de Uso:

As funções são chamadas para adicionar, remover, marcar como feita e listar as tarefas, demonstrando como podemos manipular a lista de tarefas ao longo do código.
Como o Código Funciona:
A lista de tarefas é inicializada com 3 tarefas. O código então executa as funções para manipular essa lista, realizando operações como adicionar novas tarefas, marcar como feitas, remover tarefas e ordenar as tarefas por prioridade.
O código usa as funções console.log() para exibir os resultados, permitindo visualizar como a lista de tarefas muda a cada operação.

# Saída Esperada:
Se você rodar o código, a saída será algo como:

Todas as Tarefas:
- Comprar leite (Prioridade: 3, Status: Pendente)
- Estudar para a prova (Prioridade: 1, Status: Pendente)
- Lavar a roupa (Prioridade: 2, Status: Pendente)

Tarefa "Fazer compras" adicionada.
Tarefa "Estudar para a prova" marcada como feita.
Tarefas Pendentes:
- Comprar leite
- Lavar a roupa

Tarefa "Comprar leite" removida.

Tarefas ordenadas por prioridade:
- Estudar para a prova (Prioridade: 1)
- Lavar a roupa (Prioridade: 2)
- Fazer compras (Prioridade: 2)

Todas as Tarefas:
- Estudar para a prova (Prioridade: 1, Status: Feita)
- Lavar a roupa (Prioridade: 2, Status: Pendente)
- Fazer compras (Prioridade: 2, Status: Pendente)

# Conclusão:
Esse exemplo ilustra como podemos manipular listas em JavaScript para um caso prático de gerenciamento de tarefas. Ele abrange as operações comuns de manipulação de listas, como adição, remoção, ordenação e filtragem, que são essenciais para qualquer tipo de aplicação que trabalhe com coleções de dados.