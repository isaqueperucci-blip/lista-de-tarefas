let tarefasSalvas = localStorage.getItem("minhasTarefas");
let tarefas = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];

const inputTarefa = document.getElementById("inputTarefa");

renderizarTarefas();

inputTarefa.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});

function salvarTarefas() {
  localStorage.setItem("minhasTarefas", JSON.stringify(tarefas));
}

function adicionarTarefa() {
  const mensagem = document.getElementById("mensagem");
  let tarefa = inputTarefa.value.trim();

  if (tarefa === "") {
    mensagem.textContent = "Tarefa não encontrada!!";
    mensagem.style.color = "#a34743";
  } else {
    mensagem.textContent = "Tarefa enviada com sucesso!!";
    mensagem.style.color = "#29a73e";

    tarefas.push({ texto: tarefa, concluida: false });
    salvarTarefas();
    renderizarTarefas();
  }
  setTimeout(() => (mensagem.textContent = ""), 3000);
  inputTarefa.value = "";
  inputTarefa.focus();
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  const mensagem = document.getElementById("mensagem");
  listaTarefas.textContent = "";

  for (let i = 0; i < tarefas.length; i++) {
    const novaTarefa = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefas[i].texto;
    textoTarefa.className = "nomeTarefa";

    const div = document.createElement("div");
    div.className = "botoesListaTarefas";

    const botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = tarefas[i].concluida ? "↩️" : "✔️";
    botaoConcluir.className = "botaoConcluir";

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "🗑️";
    botaoExcluir.className = "botaoExcluir";

    if (tarefas[i].concluida) {
      novaTarefa.classList.add("concluida");
    }

    botaoConcluir.addEventListener("click", function (evento) {
      evento.stopPropagation();
      tarefas[i].concluida = !tarefas[i].concluida;
      novaTarefa.classList.toggle("concluida");
      botaoConcluir.textContent = tarefas[i].concluida ? "↩️" : "✔️";
      salvarTarefas();
    });

    novaTarefa.appendChild(textoTarefa);
    novaTarefa.appendChild(div);
    div.appendChild(botaoConcluir);
    div.appendChild(botaoExcluir);
    listaTarefas.appendChild(novaTarefa);

    botaoExcluir.addEventListener("click", function (evento) {
      evento.stopPropagation();
      tarefas.splice(i, 1);
      salvarTarefas();
      mensagem.textContent = "Tarefa excluída com sucesso!!";
      mensagem.style.color = "#29a73e";
      setTimeout(() => (mensagem.textContent = ""), 3000);
      renderizarTarefas();
    });
  }
}
