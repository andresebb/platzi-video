
/*await significa que tiene que esperar que se
termine esa pieza de codigo para seguir*/

/*Sino estuviera en un funciona asincrona  tendriamos que usar el .then y .catch* para el fetch.*/
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
    console.log("animationList" + animationList)

})() 
//Estos parentecis al principio                                        
// y final es para que la funcion se autoejecute                           
