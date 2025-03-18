// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. // Aquí deberás desarrollar la lógica para resolver el problema.

//let amigos = [];

let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        listaAmigos.push(nombre);
        mostrarLista();
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function seleccionarAmigoAleatorio() {
    if (listaAmigos.length === 0) {
        alert("La lista de amigos está vacía.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    alert("Amigo seleccionado: " + listaAmigos[indiceAleatorio]);
}