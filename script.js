//seleção
let selecionar = null;
function addSelecao(div) {
  div.addEventListener("click", () => {
    if (selecionar) {
      selecionar.classList.remove("selecionada");
    }
    selecionar = div;
    selecionar.classList.add("selecionada");
  });
}

//Criar nova tarefa
document.getElementById("criarBotao").addEventListener("click", () => {
  let divTarefaPadrao = document.getElementById("divTarefaPadrao");
  let divTarefaClone = divTarefaPadrao.cloneNode(true);
  divTarefaClone.removeAttribute('id')
  addSelecao(divTarefaClone);
  document.getElementById("containerPrincipal").appendChild(divTarefaClone);
});
//Excluir tarefa
document.getElementById("excluirBotao").addEventListener("click", () => {
  if (selecionar) {
    selecionar.remove();
    selecionar = null;
  }
    else{
        alert("Selecione uma tarefa");
    }
});
//Add função
addSelecao(document.getElementById('divTarefaPadrao'));
