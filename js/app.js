let nomesAmigos = []

function adicionar () {
    let nomeEscolhido = document.getElementById("nome-amigo").value;
    let containerDeNomes = document.getElementById("lista-amigos");
    nomesAmigos.push(nomeEscolhido);

    if (containerDeNomes.textContent == "") {
        containerDeNomes.textContent = nomeEscolhido;
    } else {
        containerDeNomes.textContent = containerDeNomes.textContent + ", " + nomeEscolhido;
    }
}

function sortear () {
    let resultadoSorteio = document.getElementById("lista-sorteio")
    embaralha(nomesAmigos);

    for (let i = 0; i < nomesAmigos.length; i++) {
        if (i == nomesAmigos.length - 1){
        resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + nomesAmigos[i] + ` --> ` + nomesAmigos [0] + "<br>";
        } else {
        resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + nomesAmigos[i] + ` --> ` + nomesAmigos [i + 1] + "<br>";
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

