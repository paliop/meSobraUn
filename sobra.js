
// declaracion de variables de uso 

let ventaEvento=""
let ventaPrecio=0
let ventaNombre=""
let ventaNumero=""

// declaracion de funciones 

function venta (){
    ventaEvento=prompt("para que evento tienes un ticket?") 
    do{
        ventaPrecio=parseInt(prompt("a que precio la quieres vender?"))
    }while(isNaN(ventaPrecio))
    ventaNombre=prompt("ingresea tu nombre para que otros compradores te puedan contactar")
    ventaNumero=prompt("ingrese tu numero telefonico para que otros compradores te puedan contactar")
    alert(`Perfecto ${ventaNombre}! tu ticket de ${ventaEvento} fue listado a $ ${ventaPrecio} y otros compradores se comunicaran con vos al numero ${ventaNumero}`)
}

function lista(){
    alert("Le mostramos los eventos disponibles \n El Duki en Metropolitano, Rosario, a 14000 \n Hernan Cattaneo en Forja, Cordoba a 20000 \n Fito Paez en Luna park, Buenos Aires a 12500 \n Red hot chilli pepers en River, Buenos aires a 25000 ")
}
function mensaje(nombre, numero){
     alert(`Te dejamos los datos del vendedor para que lo contactes \n Nombre del vendedor : ${nombre} \n Numero de telefono: ${numero}`)}
function mensaje2(precio){
    alert(`el ticket al menor precio disponible es de $ ${precio}`)
}
function compra2(){
    
    
    do{
    lista()
    ask=prompt("para que evento desea comprar? indicando el nombre del artista")
     switch (ask.toLowerCase()){
        case "red hot chilli pepers":{
            mensaje2(25000)
            ask= prompt("Desea comprar este ticket?")
            if (ask=="si" || ask== "SI"){
            mensaje("augusto", "+3413249492")
            alert("Gracias , esperamos que disfrutes del evento!")
            } else if (ask == "no" || ask== "NO"){
            alert("Lo sentimos si no encontraste tickets al precio que buscabas")
            } else {
            alert("Ingrese una respuesta valida, si o no")
            }break}
        case "el duki":{
            mensaje2(14000)
            ask= prompt("Desea comprar este ticket?")
            if (ask=="si" || ask== "SI"){
            mensaje("juan", "+3413545664")
            alert("Gracias , esperamos que disfrutes del evento!")
            } else if (ask == "no" || ask== "NO"){
            alert("Lo sentimos si no encontraste tickets al precio que buscabas")
            } else {
            alert("Ingrese una respuesta valida, si o no")
            }break}
        case "hernan cattaneo":{
            mensaje2(20000)
            ask= prompt("Desea comprar este ticket?")
            if (ask=="si" || ask== "SI"){
            mensaje("andres", "+341334565654")
            alert("Gracias , esperamos que disfrutes del evento!")
            } else if (ask == "no" || ask== "NO"){
            alert("Lo sentimos si no encontraste tickets al precio que buscabas")
            } else {
            alert("Ingrese una respuesta valida, si o no")
            }break}
        case "fito paez":{
            mensaje2(12500)
            ask= prompt("Desea comprar este ticket?")
            if (ask=="si" || ask== "SI"){
            mensaje("Gino", "+11334534453")
            alert("Gracias , esperamos que disfrutes del evento!")
            } else if (ask == "no" || ask== "NO"){
            alert("Lo sentimos si no encontraste tickets al precio que buscabas")
            } else {
            alert("Ingrese una respuesta valida, si o no")
            }break}
        default:{
            alert("ingrese una opcion valida")
            break
        }
    }
    ask=prompt("desea comprar para otro evento?")
    

}while(ask!="no")}

// flujo del simulador

alert ("Bienvenido a me sobra un ticket un sitio donde comprar y vender tickets de eventos de personas que no pueden asistir")

let ask= prompt("Desea vender un ticket?")
do{
    if(ask=="si"|| ask== "SI"){
        venta()
        ask= prompt("Desea vender otro ticket?")}
    else if(ask== "no"){
        alert("perfecto! pasaremos a la seccion para comprar de otros vendedores")
        ask="no"
    }
    
    else{
        alert("Ingrese una respuesta valida, si o no")
        ask= prompt("Desea vender un ticket?") }
     
}while(ask!="no")

ask= prompt("desea comprar un ticket de otros vendedores?")

do{

    if(ask=="si"|| ask== "SI"){
        compra2()}
    else if(ask=="no"){
        alert("Gracias por usar el servicio")
    }
        else{
        alert("Ingrese una respuesta valida, si o no")
    }
       
}while(ask!="no")
alert("Gracias por usar el servicio")




/* function preguntar (){
    if ask == si {
        askt= true
    }
}
*/

/*if (ask=="si" || ask=="SI"){
    venta ()
    ask = prompt("Quieres publicar otro ticket?")
    if ( ask== "si" || ask=="SI"){
        venta()
    } else if(ask== "no"||ask=="NO"){
        alert("perfecto! pasaremos a la seccion para comprar de otros vendedores")
    }else {
        alert("ingrese una respuesta valida")
        
    }
}else if(ask== "no"||ask=="NO"){
    alert("perfecto! pasaremos a la seccion para comprar de otros vendedores")
}else {
    alert("ingrese una respuesta valida")}
*/



/*while(ask !="no"){
    if (ask=="si" || ask=="SI"){
        venta ()
        
        }else{
            alert("Ingrese una respuesta valida, si o no")
        }
    }

if (ask=="si"|| ask== "SI"){

do{
    venta()
    ask=prompt("desea vender otro ticket?")
}while(ask!="no")
}else {
    alert("ingrese una respuesta valida")
}



ask= prompt("desea comprar un ticket de otros vendedores?")
if (ask=="si" || ask=="SI"){
    alert("Tenemos tickets disponibles para los eventos \n Red hot chilli pepers en River Plate \n ")
    ask = prompt(" Cual desa comprar?")
    switch (ask.toLowerCase()){
        case "red hot chilli pepers":{
            alert("el ticket al menor precio disponible es de $ 25000 ")
            ask= prompt("Desea comprar este ticket?")
            if (ask=="si" || ask== "SI"){
                alert("Te dejamos los datos del vendedor para que lo contactes \n Nombre del vendedor : Augusto \n Numero de telefono: +3413249492")
                alert("Gracias , esperamos que disfrutes del evento!")
            } else if (ask == "no" || ask== "NO"){
                alert("Lo sentimos si no encontraste tickets al precio que buscabas")
            } else {
                alert("Ingrese una respuesta valida, si o no")
            }

        }
    }
}

funcion compra 1 ---------------------------------------------
function compra(){
    alert("Tenemos tickets disponibles para los eventos \n Red hot chilli pepers en River Plate \n ")
    ask = prompt(" Cual desa comprar?")
    switch (ask.toLowerCase()){
        case "red hot chilli pepers":{
            alert("el ticket al menor precio disponible es de $ 25000 ")
            ask= prompt("Desea comprar este ticket?")
            if (ask=="si" || ask== "SI"){
                alert("Te dejamos los datos del vendedor para que lo contactes \n Nombre del vendedor : Augusto \n Numero de telefono: +3413249492")
                alert("Gracias , esperamos que disfrutes del evento!")
            } else if (ask == "no" || ask== "NO"){
                alert("Lo sentimos si no encontraste tickets al precio que buscabas")
            } else {
                alert("Ingrese una respuesta valida, si o no")
            }}
    }}


ask= prompt("desea comprar un ticket de otros vendedores?")
*/