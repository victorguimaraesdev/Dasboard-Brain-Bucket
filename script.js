document.getElementById('criarBotao').addEventListener('click', () => {
    let divTarefaPadrao = document.getElementById('divTarefaPadrao');
    let divTarefaClone = divTarefaPadrao.cloneNode(true);
    document.getElementById('containerPrincipal').appendChild(divTarefaClone);
})

document.getElementById('excluirBotao').addEventListener('click', () => {
    let containerPrincipal = document.getElementById('containerPrincipal');
    let ultimaTarefaAdicionada = containerPrincipal.lastElementChild;
    ultimaTarefaAdicionada.remove();
})