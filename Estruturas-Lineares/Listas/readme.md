
Uma lista é uma estrutura de dados que armazena uma sequência de elementos de forma ordenada. Em Python, listas são mutáveis, ou seja, seus elementos podem ser alterados, inseridos ou removidos durante a execução do programa. As listas podem conter elementos de diferentes tipos de dados (inteiros, strings, outros objetos, etc.).

## Características:
- Ordenada: os elementos são armazenados na mesma ordem em que são inseridos.
- Mutável: é possível modificar, adicionar ou remover elementos.
- Indexada: cada elemento tem um índice, com o primeiro elemento tendo índice 0.
- Aceita elementos de diferentes tipos: uma lista pode conter números, strings, listas, objetos, etc.

## Para que serve?
As listas são amplamente utilizadas para armazenar e manipular coleções de dados que podem ser acessadas sequencialmente. Elas são úteis quando é necessário:

- Armazenar dados de tamanho variável.
- Trabalhar com dados que precisam ser acessados de forma sequencial ou por índice.
- Realizar operações de inserção, remoção e alteração em coleções de dados.

## Vantagens das Listas:
- Facilidade de uso: em Python, as listas são simples de manipular e vêm com muitos métodos integrados.
- Estrutura flexível: é possível adicionar, remover e acessar elementos de maneira eficiente.
- Tipos heterogêneos: podem armazenar diferentes tipos de dados dentro de uma mesma lista.

## Desvantagens das Listas:
- Desempenho em grandes volumes de dados: se a lista for muito grande, algumas operações podem ser lentas, como a inserção/remover no início da lista.
- Consumo de memória: como são estruturas dinâmicas, as listas podem consumir mais memória do que estruturas fixas, especialmente se o tamanho da lista for constantemente alterado.

## Manipulação de Listas:

1. Acessando Elementos:
- Acessar elementos por índice: Você pode acessar elementos diretamente por índice (começando do índice 0).

```python
lista = [10, 20, 30, 40]
print(lista[0])  # 10 (primeiro elemento)
print(lista[-1]) # 40 (último elemento)
```

- Fatiamento (slicing): Permite acessar um intervalo de elementos em uma lista.

```python
print(lista[1:3])  # [20, 30]
print(lista[:2])   # [10, 20]
print(lista[2:])   # [30, 40]
```

2. Inserção de Elementos:
append(): Adiciona um elemento ao final da lista.

```python
lista.append(50)
print(lista)  # [10, 20, 30, 40, 50]
insert(): Insere um elemento em uma posição específica.
```

```python
lista.insert(2, 25)  # Insere o 25 no índice 2
print(lista)  # [10, 20, 25, 30, 40, 50]
extend(): Adiciona todos os elementos de outra lista ao final da lista original.
```

``` python
lista.extend([60, 70])
print(lista)  # [10, 20, 25, 30, 40, 50, 60, 70]
```

3. Remoção de Elementos:
remove(): Remove a primeira ocorrência de um valor específico.

```python
lista.remove(25)
print(lista)  # [10, 20, 30, 40, 50, 60, 70]
pop(): Remove e retorna o último item da lista ou o item na posição especificada.
```


```python
print(lista.pop())  # 70 (último elemento)
print(lista.pop(2))  # 30 (índice 2)
clear(): Remove todos os elementos da lista.
```

```python
lista.clear()
print(lista)  # []
```

4. Ordenação:
sort(): Ordena a lista in-place (modifica a lista original).

```python
lista = [40, 10, 30, 50, 20]
lista.sort()
print(lista)  # [10, 20, 30, 40, 50]
sorted(): Retorna uma nova lista ordenada, sem modificar a lista original.
```

``` python
lista = [40, 10, 30, 50, 20]
sorted_lista = sorted(lista)
print(sorted_lista)  # [10, 20, 30, 40, 50]
print(lista)  # [40, 10, 30, 50, 20]
```

- Ordenar em ordem decrescente:

```python
lista.sort(reverse=True)
print(lista)  # [50, 40, 30, 20, 10]
```

5. Contagem e Localização:
count(): Conta o número de vezes que um elemento aparece na lista.

```python
lista = [1, 2, 2, 3, 2, 4]
print(lista.count(2))  # 3
index(): Retorna o índice do primeiro valor encontrado.

print(lista.index(3))  # 3 (índice da primeira ocorrência de 3)
```

6. Operações com Listas:

- Concatenar listas: Usando o operador +.

```python
lista1 = [1, 2, 3]
lista2 = [4, 5, 6]
lista_concatenada = lista1 + lista2
print(lista_concatenada)  # [1, 2, 3, 4, 5, 6]
```

- Repetir uma lista: Usando o operador *.

```python
lista = [1, 2, 3]
lista_repetida = lista * 2
print(lista_repetida)  # [1, 2, 3, 1, 2, 3]
```

- Verificar presença de um elemento: Usando o operador in.

```python
print(10 in lista)  # True
print(5 in lista)   # False
```

7. List Comprehension:
Criar listas de forma concisa e eficiente. Isso permite construir uma nova lista com base em uma lista existente, com a possibilidade de aplicar condições.

``` python
lista = [1, 2, 3, 4, 5]
lista_quadrados = [x**2 for x in lista]  # Quadrados dos números
print(lista_quadrados)  # [1, 4, 9, 16, 25]
```

Também pode-se adicionar uma condição para filtrar os elementos:

```python
lista_pares = [x for x in lista if x % 2 == 0]
print(lista_pares)  # [2, 4]
```

8. Verificar Tamanho e Transformar em String:
len(): Retorna o número de elementos na lista.

``` python
print(len(lista))  # 5
str(): Converte a lista em uma string.
print(str(lista))  # '[1, 2, 3, 4, 5]'
```

9. Aninhamento de Listas:
Listas de listas: Uma lista pode conter outras listas, criando uma estrutura bidimensional ou multidimensional.

```python
lista_de_listas = [[1, 2], [3, 4], [5, 6]]
print(lista_de_listas[0])  # [1, 2]
print(lista_de_listas[1][0])  # 3 (acessando o primeiro elemento da segunda sublista)
```

10. Transformando para Outros Tipos:
tuple(): Converte a lista em uma tupla.

```python
tupla = tuple(lista)
print(tupla)  # (1, 2, 3, 4, 5)
set(): Converte a lista em um conjunto (removendo duplicatas).
```

```python

lista = [1, 2, 3, 3, 4]
conjunto = set(lista)
print(conjunto)  # {1, 2, 3, 4}
```