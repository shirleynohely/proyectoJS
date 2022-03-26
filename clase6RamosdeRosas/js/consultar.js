
const producto = document.getElementById('producto')
const cantidad = document.getElementById('cantidad')
const precio = document.getElementById('precio')

//let subtotal = cantidad * precio
//let subtotales = document.getElementsByName('subtotal')
//let totales = document.getElementById('total')
let arrayProductos = []

const tablaProductos = document.getElementById("tablaProductos")

document.getElementById('tablap').style.display = "block"

const agregarProducto = () =>{
    
    if (localStorage.getItem("DatosForm") != null) {
        arrayProductos = JSON.parse(localStorage.getItem("DatosForm"))
        let listado = ""
       for (p of arrayProductos){ 
        listado += 
        `<tr>
        <th>${p.producto}</th>
        <th>${p.cantidad}</th>
        <th>${p.precio}</th>
        <td><button class='secondary' onclick='eliminarProducto(this)'>Eliminar</button></td>
        </tr>`
        }   
        tablaProductos.innerHTML = listado
    }     
}
agregarProducto()

/*function calcularTotal(){
    let sumar = 0
    for (let index = 0; index < subtotales.length; index++) {
        sumar = sumar + parseInt(subtotales[index].innerHTML)
    }
    totales.innerHTML="$"+sumar
}
*/
function eliminarProducto(p){
    p.parentElement.parentElement.remove()
}

limpiar.addEventListener('click',limpiarForm = () =>{
    document.getElementById('form').reset()
})


