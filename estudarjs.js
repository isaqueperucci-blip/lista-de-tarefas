// const titulo = document.querySelector("#titulo");
// const p = document.querySelector(".mensagem");
// const botao = document.querySelector(".botao-adicionar");

// console.log(titulo.textContent);
// console.log((p.textContent = "Bem-vindo à lista!"));

// botao.addEventListener("click", function () {
//   console.log((p.textContent = "Você clicou no botão!"));
// });

const input = document.querySelector(".input-tarefa");
const botao = document.querySelector(".botao-adicionar");
const lista = document.querySelector(".lista-tarefas");

botao.addEventListener("click", function () {
  const textoDigitado = input.value;

  const novoItem = document.createElement("li");
  novoItem.textContent = textoDigitado;

  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "Excluir";

  novoItem.appendChild(botaoExcluir);
  lista.appendChild(novoItem);

  input.value = "";
  input.focus();

  novoItem.addEventListener("click", function () {
    novoItem.classList.toggle("concluida");
  });

  botaoExcluir.addEventListener("click", function (evento) {
    evento.stopPropagation();
    novoItem.remove();
  });
});
