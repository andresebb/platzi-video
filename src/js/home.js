console.log("Hola mundo");
const noCambia = "Andres";

let cambia = "@Andresebb"

function cambiaNombre(nuevoNombre){
    cambia = nuevoNombre
}

const getUser = new Promise(function(todoBien, todoMal){
    //llamar a un api (simulacion)
    setTimeout(function(){
        //Luego de 3 seg se ejecuta
        todoBien("Todo esta ahuevo");
    }, 3000)
})


const getUserAll = new Promise(function(todoBien, todoMal){
    //llamar a un api (simulacion)
    setTimeout(function(){
        //Luego de 3 seg se ejecuta
        todoBien("Todo esta ahuevo 5");
    }, 5000)
})

/*getUser
    .then(function(){  //.then cuando la promesa sale bien
        console.log("Toda esta ahuevo")
    })

    .catch(function(mensaje){ //.catch cuando la promesa sale mal
        console.log(mensaje)
    })*/

    Promise.all([ 
        getUser,
        getUserAll,
    ])

    .then(function(mensaje){
        console.log(mensaje)
    })

    .catch(function(mensaje){
        console.log(mensaje)
    })



    $.ajax("https://randomuser.me/api", {
    method: "GET", //metodo get para traer los datod
    success: function(data){
        console.log(data)
    },
    error: function(error){
        console.log(error)
    }
}) 

fetch("https://randomuser.me/api/wwew")

    .then(function(response){ //este es del fetch
        //console.log(response)
        return response.json() //esto tambien devuelve una promesa
    })
            .then(function(user){ //este es del json
                console.log("user", user.results[0].name.first + user.results[0].name.last)
            })

            .catch(function(){
                console.log("algo Fallo")
            });


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

    function createTemplate(HTMLString){
        const html =  document.implementation.createHTMLDocument();//Crear dentro de la memoria de js un documento html
        html.body.innerHTML = HTMLString;  //inner es la forma de agregarlo bien bonito con lasa fotos
        return html.body.children[0]
    }

    
    function renderMovieList(list, $container){
        $container.children[0].remove(); //Borrar el gif
        list.forEach((movie) => {
            const HTMLString = videoItemTemplate(movie);
            const movieElement = createTemplate(HTMLString);
            $container.append(movieElement); //append es la forma de agrear ese codigo en texto al dom desde js
        })
    }
    
    const $actionContainer = document.getElementById("action");
    renderMovieList(actionList.data.movies, $actionContainer)
    
    const $dramaContainer = document.getElementById("drama");
    renderMovieList(dramaList.data.movies, $dramaContainer)
    
    const $animationContainer = document.getElementById("animation");
    renderMovieList(animationList.data.movies, $animationContainer)

    
    const $featuringContainer = document.getElementById("featuring");

    const $form = document.getElementById("form");
    const $home = document.getElementById("home");


    const $modal = document.getElementById("modal");
    const $overlay = document.getElementById("overlay");
    const $hideModal = document.getElementById("hide-modal");

    const $modalTitle = $modal.querySelector("h1");
    const $modalImage = $modal.querySelector("img");
    const $modalDescription = $modal.querySelector("description");

})()