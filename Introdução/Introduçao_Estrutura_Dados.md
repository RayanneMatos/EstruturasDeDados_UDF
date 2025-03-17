# Introdução às Estruturas de Dados  

## O que são Estruturas de Dados?  

Antes de adentrarmos no estudo das estruturas de dados, é importante dar um passo atrás e compreender os conceitos fundamentais que sustentam esse campo: **estruturas, dados e informações.** Dessa forma, podemos concatenar os conceitos e entender o que realmente caracteriza uma estrutura de dados e qual sua importância no contexto da ciência de dados.

**Dados**, segundo [Turban et al., 2011], são fatos brutos, números ou sinais que, isoladamente, não carregam significado. Eles são a matéria-prima para a criação de informações.

**Informações**, de acordo com [Davenport & Prusak, 1998], são dados processados e organizados de maneira que adquiram significado e utilidade, fornecendo contexto para a tomada de decisões.

**Estruturas**, de acordo com [Santos et al., 2018], referem-se à organização e arranjo sistemático de elementos, com o objetivo de facilitar o acesso, armazenamento e manipulação de dados de maneira eficiente.

**Estrutura de dados**, de acordo com [Knuth, 1997], é uma maneira de organizar e armazenar dados de forma que possamos realizar operações eficientes sobre eles, como buscas, inserções, atualizações e exclusões. A escolha adequada de uma estrutura de dados impacta diretamente a performance de algoritmos e sistemas computacionais.

## Analogia de Pilha de Peças de Lego:

Imagine uma pilha de peças de Lego, onde cada peça representa um dado. Essas peças são simples, sem significado, como números ou palavras isoladas. Apenas com a visualização das peças, não conseguimos identificar um padrão ou sentido.

Agora, imagine que você começa a separar as peças de acordo com cor e tamanho. Esse processo de organização torna as peças mais estruturadas, pois agora há uma forma sistemática de agrupá-las. A estrutura, nesse caso, é a organização das peças, o que facilita o acesso e a visualização. Com isso, as peças ainda são dados, mas agora são organizados de maneira estruturada.

Por fim, ao observar essa organização, você consegue perceber padrões, como, por exemplo, que as peças de determinadas cores ou tamanhos podem ser usadas em uma construção específica. Esse entendimento é a informação. Ao agrupar as peças por cor e tamanho, você transforma os dados (as peças) em algo que tem significado e pode ser utilizado em um projeto, tornando a organização útil e funcional.

Estrutura de dados, nesse exemplo, seria o método pelo qual você organiza essas peças de Lego, como uma pilha, onde o acesso à peça mais recente é o mais fácil. Ou seja, você pode pegar a peça do topo da pilha e adicionar novas peças no topo, facilitando a manipulação das peças em um projeto.

Nesse exemplo, a pilha de peças de Lego serve como uma analogia para entender como dados podem ser organizados e transformados em informações através de uma estrutura. A estrutura de dados (a pilha, neste caso) é o mecanismo que permite que você trabalhe de forma eficiente com os dados.

## Exemplo de problema do mundo Real com solução usando Estrutura de Dados
Imagine que você está em um banco e precisa realizar um depósito. A maneira como o banco organiza os clientes que esperam para serem atendidos envolve esses conceitos:

**Dados**:

Cada cliente que chega ao banco é representado por um simples dado, como o nome ou número de conta. Esse dado, por si só, não tem muito significado até que seja organizado.

**Estrutura**:

O banco organiza os clientes em uma fila. Esse é um exemplo de estrutura: os dados (clientes) são dispostos de uma maneira que facilita o atendimento. Uma fila é uma estrutura que segue a regra "primeiro a entrar, primeiro a sair" (FIFO - First In, First Out), onde o primeiro cliente que chega é o primeiro a ser atendido.

**Informação**:

A informação é criada quando o banco utiliza esses dados organizados para saber qual cliente deve ser atendido a seguir, o que ele precisa fazer (ex. depósito, saque, etc.), e quanto tempo ele está esperando. A estrutura de fila permite que o banco forneça uma informação útil sobre quem está na frente e quem está atrás na fila, além de gerenciar o tempo de espera.

**Estrutura de Dados**:

O sistema de fila é uma estrutura de dados que garante a ordem de atendimento. Isso permite que o banco realize a operação de forma eficiente, evitando confusão e oferecendo uma solução ágil e organizada para atender seus clientes. A estrutura de fila facilita a organização de clientes e a realização das operações no momento certo, ou seja, uma estrutura de dados garante que a organização da informação e a execução de processos ocorram de maneira eficiente.

**Resumo**

- **Dados**: Os clientes e suas informações básicas.
- **Estrutura**: A fila, onde os clientes são organizados em ordem de chegada.
- **Informação**: Saber quem deve ser atendido a seguir, quanto tempo ele espera e qual serviço ele deseja.
- **Estrutura de Dados**: A fila que organiza os clientes para garantir um atendimento eficiente e ordenado.

Esse exemplo no mundo real mostra como o conceito de estrutura de dados (como uma fila) é utilizado para organizar e manipular dados de forma eficiente, gerando informações úteis para os gestores do banco.

## Exemplo Computacional: Sistema de Cadastro de Usuários
Imagine um sistema simples para cadastrar usuários em um sistema de software. Cada usuário possui dados como nome, idade e email. O objetivo é organizar e acessar esses dados de forma eficiente.

**Dados**:

Cada usuário tem informações simples, como o nome (ex: "João"), idade (ex: 30), e email (ex: "joao@email.com"). Esses são dados brutos, sem significado, até que sejam organizados e processados.

**Estrutura**:

Esses dados precisam ser organizados de forma a permitir fácil acesso e manipulação. Para isso, podemos usar uma estrutura chamada lista. A lista vai armazenar vários usuários, permitindo que os dados de cada um sejam acessados e modificados.

Exemplo de estrutura em python:

```python
usuarios = [
    {"nome": "João", "idade": 30, "email": "joao@email.com"},
    {"nome": "Maria", "idade": 25, "email": "maria@email.com"},
    {"nome": "Pedro", "idade": 35, "email": "pedro@email.com"}
]
```
**Informação**

A informação surge quando processamos esses dados para gerar algo útil. Por exemplo, se quisermos saber a idade média dos usuários, usamos os dados para calcular essa média e gerar a informação.

Exemplo de informação usando Python:

``` python
idades = [usuario["idade"] for usuario in usuarios]
idade_media = sum(idades) / len(idades)
print(f"A idade média dos usuários é {idade_media} anos.")
```
A informação gerada é o valor da idade média, que tem significado prático.

**Estrutura de Dados:**

A estrutura de dados que estamos utilizando é a lista de dicionários. Uma lista é uma estrutura de dados que permite armazenar elementos em uma ordem específica, e os dicionários permitem associar cada dado a uma chave (ex: "nome", "idade", "email"). Portanto, a lista de dicionários é a estrutura de dados que organiza os dados dos usuários de forma eficiente, permitindo acessar, modificar e manipular as informações conforme necessário.

Exemplo computacional disponível em: ../Introdução/idade_media.py
