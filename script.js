let tarefas = [];

function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");
  const mensagem = document.getElementById("mensagem");
  let tarefa = inputTarefa.value.trim();

  if (tarefa === "") {
    mensagem.textContent = "Tarefa não encontrada!!";
    mensagem.style.color = "#a34743";
  } else {
    mensagem.textContent = "Tarefa enviada com sucesso!!";
    mensagem.style.color = "#29a73e";

    tarefas.push(tarefa);
    renderizarTarefas();
  }
  inputTarefa.value = "";
  inputTarefa.focus();
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  const mensagem = document.getElementById("mensagem");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    const novaTarefa = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefas[i];
    textoTarefa.className = "nomeTarefa";

    const div = document.createElement("div");
    div.className = "botoesListaTarefas";

    const botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "✔️";
    botaoConcluir.className = "botaoConcluir";

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "🗑️";
    botaoExcluir.className = "botaoExcluir";

    botaoConcluir.addEventListener("click", function () {
      textoTarefa.classList.toggle("concluida");
    });

    novaTarefa.appendChild(textoTarefa);
    novaTarefa.appendChild(div);
    div.appendChild(botaoConcluir);
    div.appendChild(botaoExcluir);
    listaTarefas.appendChild(novaTarefa);

    botaoExcluir.addEventListener("click", function (evento) {
      evento.stopPropagation();
      tarefas.splice(i, 1);
      mensagem.textContent = "Tarefa excluída com sucesso!!";
      mensagem.style.color = "#29a73e";
      renderizarTarefas();
    });
  }
}
