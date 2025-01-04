document.getElementById('criarBotao').addEventListener('click', () => {
    let divTarefaPadrao = document.getElementById('divTarefaPadrao');
    let divTarefaClone = divTarefaPadrao.cloneNode(true);
    document.getElementById('containerPrincipal').appendChild(divTarefaClone);
})