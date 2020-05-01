/*Selectores

Un selector nos sirve para poder manipular un objeto del DOM, 
puedes buscar dicho objeto ya sea por su id, clase, atributo, etc.

Para PlatziVideo necesitamos un selector de un contenedor 
para ponerle dentro la lista de películas.

En jQuery hacemos un selector de la siguiente forma:

const $home = $(‘ .home ’);

Por convención una variable que este represente un objeto del DOM lleva el signo $,
esto es para tener claro que estamos manipulando 
un objeto del DOM y no algún tipo de información o dato.

Dentro de JavaScript existen distintas funciones para hacer selectores, 
entre ellas se encuentra:

• getElementById: recibe como parámetro el id del objeto del DOM que estás buscando. 
Te regresa un solo objeto.
Ej: document.getElementById("id");


• getElementsByTagName: recibe como parámetro el tag que estas buscando 
y te regresa una colección html de los elementos que tengan ese tag.

Ej: document.getElementsByTagName("div")

• getElementsByClassName: recibe como parámetro la clase 
y te regresa una colección html de los elementos que tengan esa clase.

Ej: document.GetElementsById("clase")


• querySelector: va a buscar el primer elemento que coincida 
con el selector que le pases como parámetro.

Ej: document.querySelector("span");
Ej: document.querySelector("#modal");
Ej: document.querySelector(".modal");

• querySelectorAll: va a buscar todos los elementos que coincidan 
con el selector que le pases como parámetro.

Ej: document.querySelectorAll("span");
*/ 

//const $home = $(".home .list") forma de traer selectores con jquery

const $actionContainer = document.getElementById("action");
const $dramaContainer = document.getElementById("drama");
const $animationContainer = document.getElementById("animation");
const $featuringContainer = document.getElementById("featuring");

const $form = document.getElementById("form");
const $home = document.getElementById("home");


const $modal = document.getElementById("modal");
const $overlay = document.getElementById("overlay");
const $hideModal = document.getElementById("hide-modal");

const $modalTitle = $modal.querySelector("h1");
const $modalImage = $modal.querySelector("img");
const $modalDescription = $modal.querySelector("p");