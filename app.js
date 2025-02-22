// Lista de nomes a serem sorteados
let amigos = [];

// Função que adiciona um nome a lista de amigos
function adicionarAmigo() {
    document.getElementById('resultado').innerHTML = "";
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo != "" && !amigos.includes(amigo)) {
        amigos.push(amigo);
        document.getElementById('amigo').value = "";
        document.getElementById('listaAmigos').innerHTML = amigos.map(amigos => `<li>${amigos}</li>`).join("");
    } else {
        alert("Por favor, insira um nome válido.");
        document.getElementById('amigo').value = "";
    }
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        let range = amigos.length;
        let sorteado = Math.floor(Math.random() * range);
        document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${amigos[sorteado]}`;
        document.getElementById('listaAmigos').innerHTML = "";
        amigos = [];
    } else {
        alert("Adicione pelo menos 2 amigos para sortear!");
    }
}