let nomesAmigos = []

function adicionar() {
    let nomeEscolhido = document.getElementById("nome-amigo").value;

    if (nomeEscolhido.trim() === "") {
        alert("Digite um nome válido");
        return;
    }

    nomesAmigos.push(nomeEscolhido);

    document.getElementById("nome-amigo").value = "";

    atualizarLista();
}

function sortear () {
    let resultadoSorteio = document.getElementById("lista-sorteio")
    resultadoSorteio.innerHTML = "";

    embaralha(nomesAmigos);

    for (let i = 0; i < nomesAmigos.length; i++) {
        if (i == nomesAmigos.length - 1){
            resultadoSorteio.innerHTML += nomesAmigos[i] + " --> " + nomesAmigos[0] + "<br>";
        } else {
            resultadoSorteio.innerHTML += nomesAmigos[i] + " --> " + nomesAmigos[i + 1] + "<br>";
        }
    }
}

function reiniciar () {
    nomesAmigos = []

    const nomeEscolhido = document.getElementById("nome-amigo");
    const containerDeNomes = document.getElementById("lista-amigos");
    const resultadoSorteio = document.getElementById("lista-sorteio");

    nomeEscolhido.value = "";
    containerDeNomes.innerHTML = "";
    resultadoSorteio.innerHTML = "";
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarLista() {
    let container = document.getElementById("lista-amigos");
    container.innerHTML = "";

    for (let i = 0; i < nomesAmigos.length; i++) {

        container.innerHTML += `<span onclick="remover(${i})">${nomesAmigos[i]}</span>`;

        if (i < nomesAmigos.length - 1) {
            container.innerHTML += ", ";
        }
    }
}

function remover(indice) {
    nomesAmigos.splice(indice, 1);
    atualizarLista();
}