class Pilha {
    constructor() {
      this.itens = [];
    }
  
    // Adicionar elemento ao topo da pilha
    push(elemento) {
      this.itens.push(elemento);
    }
  
    // Remover elemento do topo da pilha
    pop() {
      if (this.isEmpty()) {
        console.log("A pilha está vazia!");
        return null;
      }
      return this.itens.pop();
    }
  
    // Ver o elemento no topo sem remover
    peek() {
      return this.isEmpty() ? null : this.itens[this.itens.length - 1];
    }
  
    // Verificar se a pilha está vazia
    isEmpty() {
      return this.itens.length === 0;
    }
  
    // Retornar o tamanho da pilha
    size() {
      return this.itens.length;
    }
  }
  
  // Simulação de um sistema de Undo/Redo
  class EditorTexto {
    constructor() {
      this.texto = "";
      this.undoStack = new Pilha(); // Pilha para ações desfeitas
      this.redoStack = new Pilha(); // Pilha para ações refeitas
    }
  
    escrever(novoTexto) {
      this.undoStack.push(this.texto); // Salva o estado anterior
      this.texto = novoTexto;
      this.redoStack = new Pilha(); // Limpa a pilha de redo ao escrever algo novo
      console.log(`Texto atualizado: "${this.texto}"`);
    }
  
    desfazer() {
      if (!this.undoStack.isEmpty()) {
        this.redoStack.push(this.texto); // Salva o estado atual antes de desfazer
        this.texto = this.undoStack.pop();
        console.log(`Desfeito: "${this.texto}"`);
      } else {
        console.log("Nada para desfazer.");
      }
    }
  
    refazer() {
      if (!this.redoStack.isEmpty()) {
        this.undoStack.push(this.texto); // Salva o estado antes de refazer
        this.texto = this.redoStack.pop();
        console.log(`Refeito: "${this.texto}"`);
      } else {
        console.log("Nada para refazer.");
      }
    }
  }
  
  // Exemplo de uso
  const editor = new EditorTexto();
  
  editor.escrever("Olá, mundo!"); // Texto atualizado: "Olá, mundo!"
  editor.escrever("Editando texto..."); // Texto atualizado: "Editando texto..."
  editor.desfazer(); // Desfeito: "Olá, mundo!"
  editor.desfazer(); // Desfeito: ""
  editor.refazer(); // Refeito: "Olá, mundo!"
  editor.refazer(); // Refeito: "Editando texto..."
  editor.refazer(); // Nada para refazer.
  