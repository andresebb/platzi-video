(async function load(){
    
    
    async function getData(url){
        const response = await fetch(url) /*tiene que esperar que no acabe para ejecutar el next codigo*/ 
        const info = await response.json(); //Aca esperara a que se ejecute response
        return info;
    }
    
    const $form = document.getElementById("form");
    const $home = document.getElementById("home");
    
    const $featuringContainer = document.getElementById('#featuring');
    $featuringClass = document.querySelector(".featuring");

    function showFeaturing(){
        $featuringClass.style.display="block";
    }

    //Agregando el evento del submit
    $form.addEventListener("submit", (event) => {  
        event.preventDefault(); //Evitar que se actulice cada vez que lanzamos el submit
        showFeaturing();
        $home.classList.add("search-active");//agregamos la clase search active a home cuando haga el submit
    } )


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
            // alert('click')
            showModal()
        })
        }
    function renderMovieList(list, $container) {
        // actionList.data.movies
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








        // const $home = $('.home .list #item');
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