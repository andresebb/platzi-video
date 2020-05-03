(async function load(){
    
    async function getData(url){
        const response = await fetch(url) 
        const info = await response.json(); 
        return info;
    }

    const $form = document.getElementById("form");
    const $home = document.getElementById("home");

    const $featuringContainer = document.getElementById('featuring');
    $featuringClass = document.querySelector(".featuring");

    function setAttributes($element, attributes) {  
    for (const attribute in attributes) {
        $element.setAttribute(attribute, attributes[attribute]);
        }
    }

    /*function showFeaturing(){
        $featuringClass.style.display="block";
    }*/

    const BASE_API = "https://yts.mx/api/v2/";

    function featuringTemplate(peli){ //Template para que muestre la pelicula
        return(
            `
            <div class="featuring">
                <div class="featuring-image">
                    <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
                </div>
                <div class="featuring-content">
                    <p class="featuring-title">Pelicula encontrada</p>
                    <p class="featuring-album">${peli.title}</p>
                </div>
            </div>
            `
        )
    } 

    $form.addEventListener("submit", async (event) => {  
        event.preventDefault(); 
       // showFeaturing();
        $home.classList.add("search-active");
        const $loader = document.createElement('img');
        setAttributes($loader, {
            src: 'src/images/loader.gif',
            height: 50,
            width: 50,
        })
        $featuringContainer.append($loader);
        
        //formData nos permite llenar ese formulario
        const data = new FormData($form);// se le pasa un elemento html de form

        //dice traeme las pelicula de esta url que tenga el nombre que se escribio en el buscador
        const peli = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get("name")}`);
        
        // data.get("name")En html dentro de los elementos form debemos tener un name, 
        //esto se hace para que nos traiga lo que tenemos en el buscador
        
        const HTMLString = featuringTemplate(peli.data.movies[0]) //invoca esta funcion y peli tiene un data 
        //y dentro de data hay movies traeme el elemento 0 

        $featuringContainer.innerHTML = HTMLString; //convertirlo en elemento html
    })


    const actionList = await getData("https://yts.mx/api/v2/list_movies.json=action");
    const dramaList = await getData("https://yts.mx/api/v2/list_movies.json=drama");
    const animationList = await getData("https://yts.mx/api/v2/list_movies.json=animation");

    console.log("actionList", actionList)
    console.log("dramaList", dramaList)
    console.log("animationList", animationList)

    function videoItemTemplate(movie) {
        return (
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
    function createTemplate(HTMLString) {
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        return html.body.children[0];
        }
    function addEventClick($element) {
        $element.addEventListener('click', () => {
            showModal()
        })
        }
    function renderMovieList(list, $container) {
        $container.children[0].remove();
        list.forEach((movie) => {
            const HTMLString = videoItemTemplate(movie);
            const movieElement = createTemplate(HTMLString);
            $container.append(movieElement);
            addEventClick(movieElement);
        })
        }
    const $actionContainer = document.querySelector('#action');
    renderMovieList(actionList.data.movies, $actionContainer);

    const $dramaContainer = document.getElementById('drama');
    renderMovieList(dramaList.data.movies, $dramaContainer);

    const $animationContainer = document.getElementById('animation');
    renderMovieList(animationList.data.movies, $animationContainer);

    const $modal = document.getElementById('modal');
    const $overlay = document.getElementById('overlay');
    const $hideModal = document.getElementById('hide-modal');

    const $modalTitle = $modal.querySelector('h1');
    const $modalImage = $modal.querySelector('img');
    const $modalDescription = $modal.querySelector('p');

    function showModal() {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    }

    $hideModal.addEventListener('click', hideModal);
    function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';

    }
    })()