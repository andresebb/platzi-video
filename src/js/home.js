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
            })