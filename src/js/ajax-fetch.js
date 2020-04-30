/*Tutorial de Ajax en jQuery y Javascript

Una característica muy solicitada en cualquier sitio dinámico 
es solicitar datos a un servidor, denominado API. 
Para esto normalmente se utiliza Ajax.

Ajax recibe dos parámetros los cuales son la url de la API y un objeto donde pondrás la configuración 
que se usara para realizar la petición.

En la configuración se añaden dos funciones para manejar 
cuando la petición se realizo correctamente y cuando falla.

JavaScript internamente cuenta con una función llamada fetch 
que también realiza peticiones a una API. Al igual que Ajax necesita dos parámetros, 

una url y una configuración, pero si solo le mandas la url fetch usará una configuración 
por defecto donde el método HTTP será GET.

fetch te regresa una promesa, esa promesa al resolverse te da los datos de respuesta 
y tiene un método llamado json que te regresa otra promesa con los datos en formato JSON.

Las promesas resuelven el problema del Callback Hell 
haciendo que una promesa pueda devolver otra promesa y en lugar de ser anidadas como los callback
, estas promesas son encadenadas.

*/



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
