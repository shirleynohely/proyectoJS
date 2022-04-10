const almacenarInfoJson = () =>{
    const datosProd = {producto: producto.value ,
                        cantidad: parseInt(cantidad.value),
                        precio: parseFloat(precio.value), 
                        subtotal: calcSub(cantidad.value,precio.value)}
    
    arrayProductos.push(datosProd)
    localStorage.setItem("DatosForm",JSON.stringify(arrayProductos))
    console.info("Se ha almacenado el producto en LocalStorage.")
    limpiar()
} 
consultar.addEventListener('click', () => almacenarInfoJson())
consultar.addEventListener('click',agregarProducto)

consultar.addEventListener("click", ()=> {
        Swal.fire({
            title: "Producto agregado",
        })
    })

const validarDatos = ()=> {
        return (producto.value.trim() == ""  || cantidad.value == "" || precio.value == "")
}



const limpiar =() =>{
    producto.value = ""
    cantidad.value = 0
    precio.value = 0
}


const recuperarInfoJson = () =>{
    if(localStorage.getItem("DatosForm") != null){
        arrayProductos = JSON.parse(localStorage.getItem("DatosForm"))   
    }
}
recuperarInfoJson()

