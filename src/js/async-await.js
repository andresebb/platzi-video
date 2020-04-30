/*Funciones asíncronas

Una función asíncrona va a ser como una función normal, 
pero poniendo código asíncrono de forma que sea más fácil de leer de forma síncrona.

Para declarar una función asíncrona se usa la palabra reservada async, 
luego de eso declaras tu función de forma normal. 

Dentro de una función asíncrona cuentas con otra palabra reservada llamada await, 
lo que hará esta palabra es indicar que se debe 
esperar a que termine de ejecutarse ese fragmento de código antes de continuar.

Vamos a realizar peticiones con fetch a la API de yts para pedirle películas 
según su categoría y mostrarlas dentro de PlatziVideo. 

Sin el uso de funciones asíncronas para cada fetch tendríamos 
que usar los métodos then y catch, en cambio gracias a async/await s
olo debemos escribir la palabra await antes de cada promesa.




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
    console.log("animationList", animationList)

})() 
//Estos parentecis al principio                                        
// y final es para que la funcion se autoejecute                           
