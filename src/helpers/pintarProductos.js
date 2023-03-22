
export function pintarProductos(productos){
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
    
        //crear un titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
    
        //crear un precio
        let precio=document.createElement("h5")
        precio.classList.add("text-center","text-success","fw-bold")
        precio.textContent="Cop "+producto.precio
        
        //crear una informacion
        let descripcion=document.createElement("h6")
        descripcion.classList.add("text-center","d-none")
        descripcion.textContent=producto.descripcion

        //detectando evento
        tarjeta.addEventListener("mouseover",function(){
    
            imagen.src=producto.fotos[1]
        })

        //evento2
        tarjeta.addEventListener("mouseleave",function(){
    
            imagen.src=producto.fotos[0]
        })

    
        //padres e hijos
    
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    } )
}