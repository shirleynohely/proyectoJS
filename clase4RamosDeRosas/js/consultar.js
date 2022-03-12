
function agregar(){
    document.getElementById('tablap').style.display = "block"
    function Producto(producto,cant,precio){
        this.producto=producto;
        this.cant=cant;
        this.precio=precio;
        this.subtotal=subtotal;
    }
        let producto = document.getElementById('seleccionar').value
        let cant = document.getElementById('cantidad').value
        let precio = document.getElementById('precio').value
        let subtotal = calcular (cant, precio)
        
        
        nuevoProducto = new Producto (producto,cant,precio)
        console.log(nuevoProducto)
        
        agregarProducto()
}
const arrayProductos = []
function agregarProducto(){
    
    arrayProductos.push(nuevoProducto)
    console.log(arrayProductos)
    
    document.getElementById("tablaProductos").innerHTML += "<tr>"+"<td>"+nuevoProducto.producto+"</td>"+"<td>"+nuevoProducto.cant+"</td>"+"<td>"+nuevoProducto.precio+"</td>"+"<td name='subtotal'>"+nuevoProducto.subtotal+"</td>"+"</tr>"
    calcularTotal()

}

function calcular (cant, precio){
    return cant * precio
}


function calcularTotal(){
    let subtotales = document.getElementsByName('subtotal')
    let totales = document.getElementById('total')

    let sumar = 0
    for (let index = 0; index < subtotales.length; index++) {
        sumar = sumar + parseInt(subtotales[index].innerHTML)
        
    }
    totales.innerHTML="$"+sumar
}


