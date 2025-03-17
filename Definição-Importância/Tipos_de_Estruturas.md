# Estruturas de Dados Lineares e Não Lineares

Conforme o item Introdução, estrutura de dados é a forma como organizamos e armazenamos dados para que possam ser manipulados de maneira eficiente, possibilitando operações como buscas, inserções e remoções.

Agora, para falar sobre a linearidade das estruturas, vamos à origem do conceito linear.

Quando se diz que algo é linear, entende-se que, de acordo com a matemática e a geometria, linearidade está associada a uma sequência ordenada, uma progressão contínua ou uma disposição que segue um fluxo único e bem definido. Em outras palavras, linear é algo que possui uma relação direta de sucessão entre elementos, onde cada um tem um único antecessor e um único sucessor (exceto o primeiro e o último elemento da sequência).

Dessa forma, uma estrutura de dados linear é aquela em que os elementos são organizados de maneira sequencial, ou seja, há uma ordem definida entre os elementos, permitindo percorrê-los um a um de maneira sistemática. Exemplos comuns incluem:

- Listas: onde os elementos estão dispostos em sequência, como um array ou uma lista encadeada.
- Filas (Queues): seguem a política FIFO (First In, First Out), onde o primeiro elemento a entrar é o primeiro a sair.
- Pilhas (Stacks): seguem a política LIFO (Last In, First Out), onde o último elemento inserido é o primeiro a ser removido.

O autor [Knuth, 1997] diz que uma estrutura de dados linear pode ser entendida como qualquer coleção de elementos onde há uma relação de ordem bem definida entre eles, sendo possível percorrê-los de maneira sequencial.

Já conforme [Cormen et al., 2009], uma estrutura de dados não linear é aquela onde os elementos não possuem uma relação sequencial rígida, permitindo múltiplas conexões entre os dados. Diferentemente das lineares, essas estruturas são mais flexíveis e permitem representar relacionamentos mais complexos.

**Exemplos de estruturas de dados não lineares incluem:**

- Árvores: uma hierarquia onde cada elemento pode ter múltiplos filhos, como uma árvore genealógica ou um sistema de arquivos.
- Grafos: estruturas que representam conexões entre elementos, sendo usadas em mapas, redes sociais e sistemas de recomendação.
- Tabela hash: é uma estrutura de dados que mapeia chaves a valores usando uma função hash, sendo aplicada em bancos de dados, caches, autenticação e buscas rápidas.

Enquanto as estruturas lineares são ideais para armazenar e acessar dados de maneira sequencial, as estruturas não lineares permitem representar relações mais complexas, sendo fundamentais para aplicações como inteligência artificial, redes de computadores e bancos de dados.

# RESUMO

## Impacto das Estruturas Lineares e Não Lineares 

- **Estruturas Lineares (Arrays, Listas, Pilhas, Filas)**  
  - Facilitam a manipulação sequencial de dados.  
  - São eficientes para operações simples, como buscas e inserções em sequência.  
  - Podem ser ineficientes quando é necessário encontrar elementos específicos em grandes volumes de dados.  

- **Estruturas Não Lineares (Árvores, Grafos, Hash Tables)**  
  - Permitem acesso rápido e eficiente aos dados.  
  - São mais complexas, mas extremamente úteis para buscas otimizadas e relacionamentos estruturados.  
  - Exemplo: uma árvore balanceada permite busca de elementos em **O(log n)**, enquanto um array desordenado pode levar **O(n)**.  

## Exemplo com analogia

> Lista → Lista de Compras

    Imagine que você tem uma lista de compras no papel. Os itens estão organizados em uma sequência e você pode percorrer um por um, de cima para baixo.
    Se quiser adicionar um novo item, você pode colocá-lo no final ou no meio, mas pode ser um pouco trabalhoso reorganizar tudo.

> Fila (Queue) → Fila de Banco

    Assim como uma fila de banco, quem chega primeiro é atendido primeiro (FIFO – First In, First Out).
    Quando uma pessoa entra na fila, ela vai para o final. Quando um cliente é atendido, ele sai da frente da fila.

> Pilha (Stack) → Pilha de Pratos

    Imagine uma pilha de pratos no escorredor. O último prato colocado no topo será o primeiro a ser retirado (LIFO – Last In, First Out).
    Se quiser pegar um prato no meio da pilha, terá que tirar todos os de cima antes.

# Estruturas Não Lineares
> Árvore (Tree) → Árvore Genealógica

    Uma árvore genealógica representa bem esse conceito. No topo, temos um ancestral (raiz), que se ramifica em filhos, netos, bisnetos etc.
    Assim como uma árvore binária, cada pessoa pode ter um ou mais descendentes conectados a ela.

> Grafo (Graph) → Mapa de Rotas Aéreas

    Imagine um mapa de aeroportos e voos. Cada aeroporto representa um nó, e cada voo entre aeroportos representa uma aresta.
    Alguns aeroportos têm muitas conexões (hubs), enquanto outros têm apenas algumas. Assim funciona um grafo, onde as conexões não seguem uma ordem fixa.

> Tabela Hash (Hash Table) → Índice Telefônico

    Um índice telefônico associa nomes a números de telefone. Em vez de procurar em uma lista gigante, você usa a letra inicial do nome para encontrar rapidamente a pessoa.
    Assim funciona uma tabela hash, onde um algoritmo organiza os dados para acessá-los rapidamente, sem precisar percorrer toda a lista

