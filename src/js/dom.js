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
    
    const $actionContainer = document.getElementById("action");

    actionList.data.movies.forEach((movie) => {
        const HTMLString = videoItemTemplate(movie);
        const html =  document.implementation.createHTMLDocument();//Crear dentro de la memoria de js un documento html
        html.body.innerHTML = HTMLString;  //inner es la forma de agregarlo bien bonito con lasa fotos
        $actionContainer.append(html.body.children[0]) //append es la forma de agrear ese codigo al dom desde js
        console.log(HTMLString);
    })

    
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