#include <stdio.h>

int main() {
    // Alocação estática para variáveis de tipos específicos
    int idade = 30;      // Tipo inteiro: aloca 4 bytes
    char nome[] = "João"; // Tipo string: aloca 5 bytes (4 bytes para "João" + 1 byte para o terminador nulo '\0')
    float altura = 1.75;  // Tipo float: aloca 4 bytes (ou 8 bytes, dependendo da arquitetura)

    // Exibindo os valores armazenados nas variáveis
    printf("Nome: %s\n", nome);
    printf("Idade: %d\n", idade);
    printf("Altura: %.2f\n", altura);

    // O programa aloca a memória de forma estática para cada variável,
    // e essa memória não pode ser alterada durante a execução do programa.
    
    return 0;
}
