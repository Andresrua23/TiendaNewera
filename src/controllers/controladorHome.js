import {productos} from '../helpers/baseDatos.js'


//llamando a la fila
let fila=document.getElementById("fila")

//recorriendo el arreglo
productos.forEach(function(producto){
    
    //columnas para los productos

    let columna=document.createElement("div")
    columna.classList.add("col")

    //crear tarjeta para almacenar la info de producto
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    //cresr una imagen 
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src=producto.fotos[0]

    //padres e hijos

    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)







})