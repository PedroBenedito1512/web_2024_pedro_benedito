let fifo = [];

function adicionar() {
    const valor = document.getElementById("valor").value; // Pegar o valor do campo de entrada
    if (valor === "" || isNaN(valor)) {
        alert("Valor inválido: Insira um número!");
        return;
    }
    fifo.push(Number(valor)); // Converter o valor para número e adicionar à fila
    exibir();
}

function remover() {
    if (fifo.length !== 0) {
        const valorRemovido = fifo.shift();
        alert(`Valor removido com sucesso: ${valorRemovido}`);
    } else {
        alert("Fila vazia: Sem valores para remover.");
    }
    exibir();
}

function reiniciar() {
    fifo = [];
    exibir();
}

function exibir() {
    let saida = "Fila: "; // Declarar a variável com let
    for (let i = 0; i < fifo.length; i++) {
        saida += fifo[i] + " ";
    }

    document.getElementById("exibicao").innerHTML = saida;
}
