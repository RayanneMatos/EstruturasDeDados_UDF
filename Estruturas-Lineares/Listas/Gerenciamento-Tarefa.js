// Criando uma lista de tarefas
let tarefas = [
    { tarefa: "Comprar leite", prioridade: 3, feito: false },
    { tarefa: "Estudar para a prova", prioridade: 1, feito: false },
    { tarefa: "Lavar a roupa", prioridade: 2, feito: false },
  ];
  
  // Função para adicionar uma nova tarefa
  function adicionarTarefa(tarefa, prioridade) {
    tarefas.push({ tarefa: tarefa, prioridade: prioridade, feito: false });
    console.log(`Tarefa "${tarefa}" adicionada.`);
  }
  
  // Função para remover uma tarefa concluída
  function removerTarefa(tarefa) {
    const index = tarefas.findIndex((t) => t.tarefa === tarefa);
    if (index !== -1) {
      tarefas.splice(index, 1);
      console.log(`Tarefa "${tarefa}" removida.`);
    } else {
      console.log(`Tarefa "${tarefa}" não encontrada.`);
    }
  }
  
  // Função para marcar uma tarefa como feita
  function marcarTarefaComoFeita(tarefa) {
    const tarefaEncontrada = tarefas.find((t) => t.tarefa === tarefa);
    if (tarefaEncontrada) {
      tarefaEncontrada.feito = true;
      console.log(`Tarefa "${tarefa}" marcada como feita.`);
    } else {
      console.log(`Tarefa "${tarefa}" não encontrada.`);
    }
  }
  
  // Função para listar as tarefas pendentes
  function listarTarefasPendentes() {
    console.log("Tarefas Pendentes:");
    tarefas.filter((t) => !t.feito).forEach((t) => console.log(`- ${t.tarefa}`));
  }
  
  // Função para ordenar tarefas por prioridade
  function ordenarTarefasPorPrioridade() {
    tarefas.sort((a, b) => a.prioridade - b.prioridade);
    console.log("Tarefas ordenadas por prioridade:");
    tarefas.forEach((t) => console.log(`- ${t.tarefa} (Prioridade: ${t.prioridade})`));
  }
  
  // Função para listar todas as tarefas
  function listarTarefas() {
    console.log("Todas as Tarefas:");
    tarefas.forEach((t) => {
      const status = t.feito ? "Feita" : "Pendente";
      console.log(`- ${t.tarefa} (Prioridade: ${t.prioridade}, Status: ${status})`);
    });
  }
  
  // Exemplo de uso das funções
  
  // Listar todas as tarefas
  listarTarefas();
  
  // Adicionar uma nova tarefa
  adicionarTarefa("Fazer compras", 2);
  
  // Marcar uma tarefa como feita
  marcarTarefaComoFeita("Estudar para a prova");
  
  // Listar tarefas pendentes
  listarTarefasPendentes();
  
  // Remover uma tarefa
  removerTarefa("Comprar leite");
  
  // Ordenar tarefas por prioridade
  ordenarTarefasPorPrioridade();
  
  // Listar todas as tarefas novamente
  listarTarefas();
  