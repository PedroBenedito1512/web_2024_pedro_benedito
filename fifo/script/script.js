// Criar uma lista vazia para armazenar os objetos
let fifo = [];

// Função para criar um objeto com os valores da cor e do valor
function criarObjeto() {
    const valorInput = document.getElementById("valor");
    const valor = parseFloat(valorInput.value); // Converter o valor para número
    // Verificar se o valor é um número válido
    if (isNaN(valor) || valorInput.value.trim() === "") {
        alert("Valor inválido: Insira um número!"); 
        return null; // Retorna null se o valor não for válido
    }
    const cor = document.getElementById("colorPicker").value;
    return { cor: cor, valor: valor };
}

// Função para adicionar um novo objeto à lista
function adicionarObjeto() {
    const novoObjeto = criarObjeto();
    if (novoObjeto !== null) {
        fifo.push(novoObjeto);
        alert(`Valor:${novoObjeto.valor} inserido com sucesso na fila`); 
        exibir();
    }
}

// Função para remover
function removerObjeto() {
    if (fifo.length !== 0) {
        const valorRemovido = fifo.shift();
        alert(`Valor:${valorRemovido.valor} removido com sucesso:`);
    } else {
        alert("Fila vazia: Sem valores para remover.");
    }
    exibir();
}

// Função para reiniciar a lista
function reiniciarLista() {
    fifo = [];
    exibir();
}

// Função para exibir a lista
function exibir() {
    const exibicao = document.getElementById("exibicao");
    exibicao.innerHTML = ""; // Limpar a exibição antes de adicionar novos elementos

    fifo.forEach(objeto => {
        const corCircle = document.createElement("span");
        corCircle.classList.add("cor-circle");
        corCircle.style.backgroundColor = objeto.cor; // pegar a cor de fundo da bola

        const textoValor = document.createElement("span");
        textoValor.textContent = `Valor: ${objeto.valor}`;
        textoValor.style.color = objeto.cor; //pegar a cor do texto

        const elementoBr = document.createElement("br");

        //bola de cor e o texto à div de exibição
        exibicao.appendChild(corCircle);
        exibicao.appendChild(textoValor);
        exibicao.appendChild(elementoBr);
    });
}

// Atribuir eventos aos botões
document.getElementById("adicionar").addEventListener("click", adicionarObjeto);
document.getElementById("remover").addEventListener("click", removerObjeto);
document.getElementById("reiniciar").addEventListener("click", reiniciarLista);

// Exibir a lista inicialmente
exibir();

