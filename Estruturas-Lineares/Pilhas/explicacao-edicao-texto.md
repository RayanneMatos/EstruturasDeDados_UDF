# Explicação do Código
1. Criamos a classe Pilha, que permite adicionar (push), remover (pop), visualizar o topo (peek), verificar se está vazia (isEmpty) e obter o tamanho (size).

2. Criamos a classe EditorTexto, que gerencia um texto e permite desfazer e refazer utilizando duas pilhas:
undoStack para armazenar estados anteriores.

3. redoStack para armazenar ações que podem ser refeitas.
Quando o usuário escreve um novo texto, o estado atual é salvo em undoStack, e redoStack é resetado.

Ao desfazer (desfazer), o estado atual vai para redoStack e recuperamos o último estado de undoStack.
Ao refazer (refazer), o estado atual é salvo em undoStack, e recuperamos o último estado de redoStack.


## Saída Esperada do Código:

Texto atualizado: "Olá, mundo!"
Texto atualizado: "Editando texto..."
Desfeito: "Olá, mundo!"
Desfeito: ""
Refeito: "Olá, mundo!"
Refeito: "Editando texto..."
Nada para refazer.