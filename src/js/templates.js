/*Creación de templates
Vamos a crear una plantilla con nuestro elemento base, dicha plantilla será recibirá valores dinámicos.

Dentro de jQuery, la creación de un template seria con un texto base y si nuestro texto cuenta con distintas líneas más aparte tuviera valores dinámicos se vería de la siguiente forma:

‘<div class=”container”>’ +
    ‘<p id=’+ id +’>Hola Mundo<p>’ +
‘<div>’
Desde ECMAScript 6 contamos con una nueva característica llamada template literals que se representan con las comillas invertidas ``, el ejemplo anterior pasaría a verse de esta forma:

`<div class=”container”>
    <p id=${id}>Hola Mundo<p>
<div>`*/


//Esta seria la forma de hacerlo con jquery

/*'<div class="primaryPlaylistItem">' +
    '<div class="primaryPlaylistItem-image">' +
        '<img src="src/images/covers/midnight.jpg">' +
    '</div>' +
    '<h4 class="primaryPlaylistItem-title">' +
        'Titulo de la peli' +
    '</h4>'
'</div>'*/

/*
        //Esta es la forma de hacerlo con js
        
        
        `<div class="primaryPlaylistItem">
            <div class="primaryPlaylistItem-image">
                <img src="${src}">
            </div>
            <h4 class="primaryPlaylistItem-title">
                ${title}
            </h4>
        </div>`
    )
}
//console.log(videoItemTemplate("src/images/covers/despacito.jpg", "despacito"));
*/

(async function load(){


    async function getData(url){
        const response = await fetch(url) /*tiene que esperar que no acabe para ejecutar el next codigo*/ 
        const info = await response.json(); //Aca esperara a que se ejecute response
        return info;
        }
            
    const actionList = await getData("https://yts.mx/api/v2/list_movies.json=action");
    const dramaList = await getData("https://yts.mx/api/v2/list_movies.json=drama");
    const animationList = await getData("https://yts.mx/api/v2/list_movies.json=animation");
    
    console.log("actionList", actionList)
    console.log("dramaList", dramaList)
    console.log("animationList", animationList)
    
    function videoItemTemplate(movie){
    
        return (
            //Esta es la forma de hacerlo con js
            `<div class="primaryPlaylistItem">
                <div class="primaryPlaylistItem-image">
                    <img src="${movie.medium_cover_image}">
                </div>
                <h4 class="primaryPlaylistItem-title">
                    ${movie.title}
                </h4>
            </div>`
        )
    }

    actionList.data.movies.forEach((movie) => {
        const HTMLString = videoItemTemplate(movie);
        console.log(HTMLString);
    })

    
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

})() 