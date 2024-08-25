document.addEventListener('DOMContentLoaded', function() {
    fetch('personajes.json')
        .then(response => response.json())
        .then(data => mostrarPersonajes(data))
        .catch(error => console.error('Error al cargar el JSON:', error));
});

function mostrarPersonajes(personajes) {
    const contenedor = document.getElementById('lista-personajes');
    
    personajes.forEach(personaje => {
        // crea un div para cada personaje
        const personajeDiv = document.createElement('div');
        personajeDiv.className = 'personaje';

        // para añadir el nombre y la casa
        const nombre = document.createElement('h2');
        nombre.textContent = personaje.nombre;
        const casa = document.createElement('p');
        casa.textContent = `Casa: ${personaje.casa}`;

        // para añadir los elementos al contenedor del personaje
        personajeDiv.appendChild(nombre);
        personajeDiv.appendChild(casa);

        // para añadir el personaje al contenedor principal
        contenedor.appendChild(personajeDiv);
    });
}
