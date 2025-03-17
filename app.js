let amigos = [];
let sorteados = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/; // Permite solo letras y espacios
    
    if (nombre === "" || !regex.test(nombre)) {
        alert("Por favor ingrese un nombre válido (solo letras y espacios, sin números ni caracteres especiales).");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido registrado. Ingrese un nombre diferente.");
        return;
    }
    
    amigos.push(nombre);
    actualizarListaAmigos();
    
    // Limpiar el input después de agregar el nombre
    input.value = "";
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    // Filtrar solo los amigos que aún no han sido sorteados
    const disponibles = amigos.filter(amigo => !sorteados.includes(amigo));
    
    disponibles.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Filtrar los amigos que aún no han sido sorteados
    const disponibles = amigos.filter(amigo => !sorteados.includes(amigo));
    
    if (disponibles.length === 0) {
        alert("Todos los nombres han sido sorteados. Reinicie para comenzar de nuevo.");
        return;
    }
    
    // Seleccionar un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * disponibles.length);
    const amigoSorteado = disponibles[indiceAleatorio];
    
    // Agregar el amigo sorteado a la lista de sorteados
    sorteados.push(amigoSorteado);
    actualizarListaAmigos();
    
    // Mostrar el resultado en la lista de resultados
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultado previo
    
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado}! 🎉`;
    resultadoLista.appendChild(li);
}

