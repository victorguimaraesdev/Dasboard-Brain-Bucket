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
let corSelecionada = "#ccc"

//Criar nova tarefa
document.getElementById("criarBotao").addEventListener("click", () => {
  let divTarefaPadrao = document.getElementById("divTarefaPadrao");
  let divTarefaClone = divTarefaPadrao.cloneNode(true);
  divTarefaClone.removeAttribute('id');
  addSelecao(divTarefaClone);
  document.getElementById("containerPrincipal").appendChild(divTarefaClone);
});
//Excluir tarefa
document.getElementById("excluirBotao").addEventListener("click", () => {
  if (selecionar) {
    selecionar.classList.add("excluindo")
    setTimeout(() => {
        selecionar.remove();
        selecionar = null;
    }, 1000)
  }
    else{
        alert("Selecione uma tarefa");
    }
});
//Add função
addSelecao(document.getElementById('divTarefaPadrao'));


//Troca de cor
let local = document.querySelector('#botaoContainer');
let trocaDeCorBotao = document.querySelector('#trocaDeCorBotao');

trocaDeCorBotao.addEventListener('click',() => {
  let selecaoDeCor = document.querySelector('#cor');
  selecaoDeCor.focus();
  selecaoDeCor.click();
  selecaoDeCor.addEventListener('input', (e) => {
    corSelecionada = e.target.value
    document.querySelector('#box').style.backgroundColor = e.target.value;
    if (selecionar) {
      selecionar.style.backgroundColor = corSelecionada + "55"
      console.log(selecionar);
    };
  });
});