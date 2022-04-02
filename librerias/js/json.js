

const almacenarInfoJson = () =>{
    const datosProd = {producto: producto.value ,cantidad: parseInt(cantidad.value),precio: parseFloat(precio.value)}
    arrayProductos.push(datosProd)
    localStorage.setItem("DatosForm",JSON.stringify(arrayProductos))
    console.info("Se ha almacenado el producto en LocalStorage.")
    limpiar()
} 
consultar.addEventListener('click', () => almacenarInfoJson())
consultar.addEventListener('click',agregarProducto)

/*consultar.addEventListener("click", ()=> {
    Swal.fire({
        title: "Producto agregado",
    })
})*/

consultar.addEventListener("click", ()=> {
        Swal.fire({
            title: "Producto agregado",
        })
    })



const limpiar =() =>{
    producto.value = ""
    cantidad.value = 0
    precio.value = 0
}


const cargoProd = (array)=> {
    producto.value = array.producto
    cantidad.value = array.cantidad
    precio.value = array.precio
}

const recuperarInfoJson = () =>{
    if(localStorage.getItem("DatosForm") != null){
        arrayProductos = JSON.parse(localStorage.getItem("DatosForm"))   
    }
}
recuperarInfoJson()