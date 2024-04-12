// Estrutura de dados
let estrutura = "pilha";
let dados = [];

// Funções
function escolherEstrutura(elemento) {
    let estruturaAnterior = estrutura;
    estrutura = elemento.value;

    if (estruturaAnterior !== estrutura) {
        reiniciar();
    }
}

function adicionar() {
    let valor = document.getElementById("valor").value;
    if (valor === "") {
        alert("Insira um valor!");
        return;
    }

    if (estrutura === "pilha") {
        dados.push(valor);
    } else {
        dados.unshift(valor);
    }

    exibir();
}

function remover() {
    if (estrutura === "fila") {
        dados.shift();
    } else {
        dados.pop();
    }

    exibir();
}

function reiniciar() {
    dados = [];
    exibir();
}

function exibir() {
    let saida = "";
    if (estrutura === "pilha") {
        saida = "Pilha: ";
        for (let i = dados.length - 1; i >= 0; i--) {
            saida += dados[i] + " ";
        }
    } else {
        saida = "Fila: ";
        for (let i = 0; i < dados.length; i++) {
            saida += dados[i] + " ";
        }
    }

    document.getElementById("exibicao").innerHTML = saida;
}