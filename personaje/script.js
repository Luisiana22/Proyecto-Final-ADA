//elementos de HTML
let $contenedor = document.getElementById("contenedor");

//URL discriminando cada personaje

const id = new URL(window.location.href).searchParams.get("id");

fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    // console.log(data)
    mostrar(data);
  })
  .catch((error) => {
    console.log(error);
  });

//INFO personaje

function mostrar(personaje) {
  $contenedor.innerHTML = "";
  $contenedor.innerHTML += `
    <div id="card">
    <img class="image" src="${personaje.image}" alt="${personaje.name}">
    <br>
    <br>
    <div class="debajo-tarjeta">
        <h4>Nombre: ${personaje.name} </h4>
        <p>Genero: ${personaje.gender}</p>
        <p>Especie: ${personaje.species}</p>
        <p>Estado: ${personaje.status}</p>
        <p>Origen: ${personaje.origin.name}</p>
        <p>Ubicacion: ${personaje.location.name}</p>
        <p>ID: "${personaje.id}"</p>
        <p>Especie: ${personaje.status}</p>
    </div>
    </div>`;
}
