/*Promesas
Las promesas sirven para manejar nuestro código asíncrono.

“Una Promesa es un objeto que representa la terminación
o el fracaso eventual de una operación asíncrona”, o dicho de forma más cotidiana, 
se va a mandar una función para ver si falla o se ejecuta con éxito.

Al crear una Promesa debemos pasarle por argumento la función que vamos a ejecutar 
de forma asíncrona, dicha función va a recibir dos parámetros para evaluar 
si se ejecuto bien la función o si fallo.

Nuestra promesa va a tener dos métodos para saber si todo salió bien o fallo. 
El método then se encarga cuando la promesa se cumplió exitosamente, 
mientras que el método catch se encarga cuando la promesa falla.

Dentro de JavaScript tenemos dos funciones para ejecutar 
una función después de algún tiempo, estas funciones son:

• setInterval: ejecutara una función cada x tiempo.
• setTimeout: ejecutara una función después de x tiempo.

Si queremos resolver varias promesas a la misma vez, 
Promise cuenta con un método llamado all que recibe un array de promesas como parámetro. 
Este método se termina cuando todas las promesas del array se terminan de ejecutar. 
Si una de las promesas falla entonces el método all saltara un error 
mandándote al método catch.

Promise también cuenta con el método race que te regresa los resultados 
de la promesa que termine primero.*/

console.log("Hola mundo");
const noCambia = "Andres";

let cambia = "@Andresebb"

function cambiaNombre(nuevoNombre){
    cambia = nuevoNombre
}
/*Las promesas reciven argumentos.
y esa funcion que va como parametro de la promsa
recive dos parametros*/
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





    /*Enviar multiples promesas
    a promise.all se le envian varias promesas*/

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