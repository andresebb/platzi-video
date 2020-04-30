//ajax y fetch se utilizan para traer nuevos dato
//de un servidor o servicio a lo que por lo general
//llamado API

/*En ajax se mandan dos parametros
1- una url
2- Una configuracion que a su vez sera un objeto*/

$.ajax("https://randomuser.me/api", {
    method: "GET", //metodo get para traer los datod
    success: function(data){
        console.log(data)
    },
    error: function(error){
        console.log(error)
    }
}) 

/*Fetch tambien recive dos parametros
1- la url
2-Una configuracion, aunque sino la ponemos
no pasa nada, pondra la que viene por defecto
usara el method GEt

fetch devuelve una promesa*/

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
