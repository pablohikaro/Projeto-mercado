const button = document.querySelector('.buttom-add')
const input = document.querySelector('.text-add')
const listaCompleta = document.querySelector('.lista-tarefa')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostraTarefa()

}

function mostraTarefa(){

let novaLi= ''

minhaListaDeItens.forEach( (item, posicao) => {

    novaLi = novaLi + ` 
    <li class="lista ${item.concluida && "done"}">
        <img src="src/imagens/verificar.png" alt="imagens   verificar" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="./src/imagens/excluir.png" alt="imagens excluir"  onclick="deletarItem(${posicao})">
    </li>

    `
})

    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostraTarefa()
}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostraTarefa()

}

function recarregarTarefas(){
    const tarefaDoLocalStorage = localStorage.getItem('lista')
    if(tarefaDoLocalStorage){

    minhaListaDeItens = JSON.parse(tarefaDoLocalStorage)
    }
    mostraTarefa()
   
}


recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)