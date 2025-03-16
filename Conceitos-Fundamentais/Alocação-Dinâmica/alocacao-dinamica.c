#include <stdio.h>
#include <stdlib.h>

int main() {
    // Alocando dinamicamente um vetor de inteiros com 5 elementos
    int *vetor = (int *)malloc(5 * sizeof(int));  // aloca memória para 5 inteiros

    if (vetor == NULL) {
        printf("Falha na alocação de memória.\n");
        return 1;  // Sai do programa caso a alocação falhe
    }

    // Inicializando o vetor com valores
    for (int i = 0; i < 5; i++) {
        vetor[i] = i * 10;
    }

    // Exibindo os valores do vetor
    printf("Vetor alocado dinamicamente: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");

    // Liberando a memória alocada dinamicamente
    free(vetor);

    return 0;
}
