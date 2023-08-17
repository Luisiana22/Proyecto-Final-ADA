//elementos de HTML
let $contenedor = document.getElementById("contenedor");
let $todos = document.getElementById("todos");
let $mujeres = document.getElementById("mujeres");
let $hombres = document.getElementById("hombres");
let $sinGenero = document.getElementById("sinGenero");
let $desconocido = document.getElementById("desconocido");

//variable
let personajes = [];

fetch("https://rickandmortyapi.com/api/character")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    // console.log(data)
    personajes = data.results;
    console.log(personajes);
    mostrarTodos(personajes);
  })
  .catch((error) => {
    console.log(error);
  });

//Funcion mostar TODO el contenido del personaje

function mostrarTodos(array) {
  $contenedor.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    $contenedor.innerHTML += `
    <div id="card">
        <img class="image" src="${array[i].image}" alt="${array[i].name}">
        <br>
        <br>
        <div class="debajo-tarjeta">
            <h4>Nombre: ${array[i].name} </h4>
            <p>Genero: ${array[i].gender}</p>
            <p>Especie: ${array[i].species}</p>
            <p>Estado: ${array[i].status}</p>
            <p>Origen: ${array[i].origin.name}</p>
            <p>Ubicacion: ${array[i].location.name}</p>
        </div>
        <br>
        <br>
        <a class="ver" href="./personaje/index.html?id=${array[i].id}"> VER MAS ... </a>
    </div>`;
  }
}
//Funciones filter de personajes

function women() {
  let womenList = personajes.filter((personaje) => {
    return personaje.gender === "Female";
  });
  mostrarTodos(womenList);
  console.log(womenList);
}
function men() {
  let menList = personajes.filter((personaje) => {
    return personaje.gender === "Male";
  });
  mostrarTodos(menList);
  console.log(menList);
}
function todosPers() {
  let todos = personajes.filter((personaje) => {
    return personaje;
  });
  mostrarTodos(todos);
  console.log(todos);
}
function genderLess() {
  let genderlessList = personajes.filter((personaje) => {
    return personaje.gender === "genderless";
  });
  mostrarTodos(genderlessList);
  console.log(genderlessList);
}
function unKnown() {
  let unknownList = personajes.filter((personaje) => {
    return personaje.gender === "unknown";
  });
  mostrarTodos(unknownList);
  console.log(unknownList);
}

//Eventos filter
$mujeres.addEventListener("click", women);
$todos.addEventListener("click", todosPers);
$hombres.addEventListener("click", men);
$sinGenero.addEventListener("click", genderLess);
$desconocido.addEventListener("click", unKnown);

//elementos de HTML
let $backk = document.getElementById("backk");
let $back = document.getElementById("back");
let $next = document.getElementById("next");
let $nexxt = document.getElementById("nexxt");
let botonesPaginacion = document.querySelectorAll(".botonesPaginacion");

//Variable
let pagina = 1;

//Funcion fetch paginado

function usarFetch(page) {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      // console.log(data)
      personajes = data.results;
      mostrarTodos(personajes);
      // console.log(personajes)
    });
}

//Funcion botones paginado

primera = () => {
  $back.disabled = true;
  $backk.disabled = true;
};

function botones() {
  if (pagina === 1) {
    $backk.disabled = true;
    $back.disabled = true;
    $next.disabled = false;
    $nexxt.disabled = false;
  } else if (pagina === 42) {
    $backk.disabled = false;
    $back.disabled = false;
    $next.disabled = true;
    $nexxt.disabled = true;
  } else {
    $next.disabled = false;
    $nexxt.disabled = false;
    $back.disabled = false;
    $backk.disabled = false;
  }
}

function pageBackk() {
  pagina = 1;
  usarFetch(1);
  console.log(pagina);
}

function pageBack() {
  pagina--;
  usarFetch(pagina);
  console.log(pagina);
}
function pageNext() {
  pagina++;
  usarFetch(pagina);
  console.log(pagina);
}
function pageNexxt() {
  pagina = 42;
  usarFetch(42);
  console.log(pagina);
}

//Eventos paginado
$backk.addEventListener("click", pageBackk);
$back.addEventListener("click", pageBack);
$next.addEventListener("click", pageNext);
$nexxt.addEventListener("click", pageNexxt);
botonesPaginacion.forEach((boton) => boton.addEventListener("click", botones));
