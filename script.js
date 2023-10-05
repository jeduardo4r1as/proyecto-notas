// Declaramos todo !
var boton = document.getElementById("agregar");
var entrada = document.getElementById("entradaUsuario");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

// Limitar que una tarea no exeda un limite de caracteres
function longitudEntrada() {
  return entrada.value.length;
}

// C R U D

// CREARTE > C

function crearElementoLista() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(entrada.value));
  ul.appendChild(li);
  entrada.value = "";
  //Agregar elementos adicionales HECHO Y BORARAR
  var botonHecho = document.createElement("button");
  botonHecho.appendChild(document.createTextNode("Hecho!"));
  botonHecho.classList.add("btn1");
  li.appendChild(botonHecho);
  // Subrayar el texto
  botonHecho.onclick = subrayarPadre;
  // Delete
  var botonEliminar = document.createElement("button");
  botonEliminar.appendChild(document.createTextNode("Eliminar!"));
  botonEliminar.classList.add("btn1");
  li.appendChild(botonEliminar);
  botonEliminar.onclick = eliminarPadre;
}

function subrayarPadre(evento) {
  evento.target.parentNode.classList.toggle("done");
}

function eliminarPadre(evt) {
  evt.target.parentNode.remove();
}

function agregarListaDespuesDeClick() {
  if (longitudEntrada() > 0) {
    crearElementoLista();
  }
}

function agregarListaDespuesDePresionar(evento) {
  if (longitudEntrada() > 0 && evento.keyCode === 13) {
    crearElementoLista();
  }
}
boton.addEventListener("click", agregarListaDespuesDeClick);
entrada.addEventListener("keypress", agregarListaDespuesDePresionar);
// DOM > DOCUMENT OBJECT NOTATION
