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