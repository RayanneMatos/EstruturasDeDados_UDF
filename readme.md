# Estruturas de Dados - UDF

Este repositório foi criado para a Avaliação de Estruturas de Dados I - Unidade 1. 
Ele contém exemplos práticos e explicações sobre conceitos fundamentais de Estruturas de Dados, abordando a definição e importância das estruturas de dados no desenvolvimento de programas, os conceitos fundamentais de variáveis, tipos de dados e alocação de memória e uma visão geral das estruturas lineares: listas, filas e pilhas.

# Tecnologias utilizadas
Para a escrita e explicação do conteúdo, utilizamos Markdown. Já para os exemplos práticos no ambiente de desenvolvimento, foram usadas as linguagens de programação:

- JavaScript
- C
- Python

# Estrutura do Repositório e trilha de estudo

Para iniciar o estudo de estrutura de dados, é fundamental compreender os conceitos básicos e os termos utilizados ao longo da disciplina.
Dessa forma, todas as explicações foram construídas a partir de definições essenciais, permitindo uma base sólida para o entendimento dos principais conceitos.
Além disso, analogias e exemplos práticos foram utilizados para facilitar a assimilação e a aplicação no ambiente de desenvolvimento.
Com essa abordagem, será possível obter uma visão geral do essencial e, assim, avançar de forma estruturada para as próximas unidades em busca de aperfeiçoamento.

Recomenda-se, portanto, que o estudo siga a seguinte trilha:

``` bash
EstruturasDeDados_UDF/
│── readme.md
│
│── Introducao/
│   ├── idade-media.py
│   ├── Introducao-Estrutura-Dados.md
│
│── Definicao-Importancia/
│   ├── busca-estruturada.py
│   ├── Tipos-de-Estruturas.md
│
│── Conceitos-Fundamentais/
│   ├── Dados/
│   ├── Memória/
│   ├── Variáveis/
│   ├── Alocacao-Dinamica/
│   ├── Alocacao-Estatica/
│   ├── conceitos.md
│   ├── relacao.md
│
│── Estruturas-Lineares/
│   ├── Array/
│   ├── Filas/
│   ├── Listas/
│   ├── Pilhas/
│
│── Aplicacao/
│   ├── balanced-parentheses.py
│   ├── Expressao-balanceada.m
│   ├── imposto-renda.md
│   ├── Imposto-Renda.py
```

# Objetivo
O objetivo deste repositório é demonstrar, de maneira organizada e prática, os conceitos essenciais de Estruturas de Dados, facilitando a compreensão e implementação de soluções eficientes.

# Conteúdo
1. Introdução
   - Nesta seção, são abordados os conceitos de dados, informações e estruturas, culminando na explicação do que é uma estrutura de dados. Para facilitar a compreensão, utilizou-se a analogia com peças de LEGO, ilustrando como os dados podem ser organizados e transformados em informações por meio de uma estrutura.
   - Como exemplo do mundo real no ambiente de desenvolvimento, foi explorado o funcionamento de uma agência bancária, destacando a coleta de dados, a organização da fila e a ordem de atendimento.
   - Já no contexto computacional, foi desenvolvido um sistema em Python para cadastrar usuários em um software, demonstrando como essas informações podem ser processadas para calcular a idade média dos usuários, tornando-se um dado útil para análise.
   
3. Definição e Importância
   - Nesta seção, são abordadas as diferenças entre estruturas de dados lineares e não lineares. O conteúdo começa relembrando o conceito de estrutura de dados, seguido pela definição do que significa algo ser linear, para então explicar detalhadamente as características das estruturas de dados lineares e não lineares, esclarecendo quais são os impactos dela no ambiente de desenvolvimento, com exemplos práticos de cada uma.
   - Como exemplo de estrutura de dados, foi elaborado um sistema em Python para comparar duas abordagens de busca: busca_sem_estrutura(lista, valor), que percorre uma lista elemento por elemento, e busca_com_estrutura(conjunto, valor), que utiliza um conjunto (set) para verificar diretamente a existência de um valor.
   - A saída esperada do programa é:
   ``` yaml
   Busca sem estrutura otimizada: 0.04567 segundos
   Busca com estrutura otimizada: 0.00001 segundos
    ```
   - Esses resultados evidenciam que a busca em uma lista é mais lenta (O(n)), pois requer a verificação sequencial de cada elemento até encontrar o valor desejado.
   - Já a busca em um conjunto é significativamente mais rápida (O(1) em média), pois utiliza uma tabela hash para acessar diretamente os elementos, demonstrando a importância de escolher a estrutura de dados adequada para otimizar o desempenho de um programa, especialmente ao lidar com grandes volumes de dados.

5. Conceitos Fundamentais
   - Na seção de Conceitos Fundamentais, foram abordados os tipos de dados primitivos, a tipagem de dados e os tipos abstratos de dados, estabelecendo a base necessária para compreender como os dados são representados e manipulados no ambiente computacional.
   - Em seguida, foi introduzido o conceito de memória computacional, explicando seus fundamentos, o funcionamento do endereçamento de memória e o papel dos ponteiros. Para facilitar a compreensão, utilizou-se uma analogia entre ponteiros e endereços residenciais, ilustrando essa relação por meio de um código em C.
   - Também foi detalhado o que é uma variáve, como é composta, como usar, os tipos e sua importância.
   - Somente após essa base conceitual, foram explorados os conceitos de alocação de memória, diferenciando suas formas estática e dinâmica. Além disso, foram apresentados exemplos práticos de desenvolvimento, destacando as vantagens e desvantagens de cada abordagem, permitindo uma visão mais clara sobre quando e como utilizar cada técnica de alocação.
   - Para encerrar a seção, foram explicados os Conceitos Fundamentais relacionados a Variáveis, Tipos de Dados e Alocação de Memória, demonstrando a relação entre esses elementos por meio de analogias e exemplos práticos em C.
   - O uso da linguagem C foi escolhido intencionalmente, pois permite um controle mais explícito sobre a alocação de memória, diferenciando entre alocação estática e dinâmica. Já em linguagens como Python, a alocação de memória é sempre dinâmica. Ou seja, ao criar uma variável, o Python aloca automaticamente a quantidade necessária de memória com base no valor atribuído, sem exigir a intervenção direta do programador.
   - Essa abordagem permitiu uma compreensão mais aprofundada sobre como a memória é gerenciada em linguagens de baixo nível e como isso impacta o desempenho e a eficiência dos programas.
   
7. Estruturas Lineares
    - Na seção sobre Estruturas de Dados Lineares, comecei explicando o conceito de array, que é fundamental para entender outras estruturas de dados como filas, listas e pilhas, uma vez que ele serve como a base para muitas dessas implementações.
    - Em seguida, aprofundei a explicação sobre fila, pilha e lista, detalhando o que são, para que servem, suas vantagens e desvantagens, os diferentes tipos existentes, e as formas de manipulação dessas estruturas.
    - Para ilustrar esses conceitos de maneira prática, desenvolvi um sistema utilizando JavaScript, demonstrando como cada uma dessas estruturas pode ser implementada e manipulada em um ambiente de desenvolvimento real.

8. Aplicação Prática
    - Na aplicação prática, apresentei dois exemplos utilizando Python para ilustrar o uso de pilhas e filas.
    - O primeiro exemplo foi sobre expressões matemáticas balanceadas, onde utilizei uma pilha para verificar se os parênteses, colchetes e chaves de uma expressão estavam devidamente abertos e fechados, garantindo a correção da sintaxe.
    - O segundo exemplo foi um sistema de controle de fila de clientes para atendimento de imposto de renda, com o objetivo de garantir que os clientes fossem atendidos na ordem de chegada, seguindo a política FIFO (First In, First Out). Esse exemplo demonstrou como uma fila pode ser aplicada para organizar o atendimento de maneira eficiente e justa.
    - Esses exemplos práticos mostram como as estruturas de dados, como pilhas e filas, podem ser utilizadas para resolver problemas do mundo real de maneira eficiente e organizada.


# Executando os testes da aplicação
Para rodar os exemplos disponíveis no repositório, siga os passos abaixo:

```bash
# Clone este repositório
git clone https://github.com/RayanneMatos/EstruturasDeDados_UDF.git

# Acesse a pasta do projeto
cd EstruturasDeDados_UDF

# Execute os exemplos no ambiente desejado:
# Python:
python3 Aplicacao/balanced-parentheses.py

# C (compilar e rodar):
gcc -o programa exemplo.c
./programa

# JavaScript (Node.js):
node Estruturas-Lineares/Filas/exemplo.js
```

# Referências
- CARVALHO, Thiago Leite e. Estruturas de Dados: Domine as práticas essenciais em C, Java, C#, Python e JavaScript. 1. ed. São Paulo: Novatec, 2020. ISBN 978-85-7522-780-6.
- GEEKSFORGEEKS. Alocação de Memória em C/C++. Disponível em: https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c/. Acesso em: 16 mar. 2025.
- MOZILLA FOUNDATION. Documentação do JavaScript sobre estruturas de dados. Disponível em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures. Acesso em: 16 mar. 2025.
- PIVA JUNIOR, Dilermando; NAKAMITI, Gilberto Shigueo; FREITAS, Ricardo Luís de; XASTRE, Leandro Alonso; BIANCHI, Francisco. Estrutura de dados e técnicas de programação. 1. ed. Rio de Janeiro: Elsevier, 2014. ISBN 978-85-352-7437-0. Disponível em: https://www.kufunda.net/publicdocs/Estrutura%20de%20Dados%20e%20T%C3%A9cnicas%20de%20Programa%C3%A7%C3%A3o%20(Francisco%20Bianchi).pdf. Acesso em: 16 mar. 2025.
- Python Software Foundation. Documentação do Python sobre gerenciamento de memória. Disponível em: https://docs.python.org/. Acesso em: 16 mar. 2025.
- Python Software Foundation. Documentação do Python sobre estruturas de dados. Disponível em: https://docs.python.org/3/tutorial/datastructures.html. Acesso em: 16 mar. 2025.
