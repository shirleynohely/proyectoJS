
function agregarProducto(){
    document.getElementById('tablap').style.display = "block"
    let producto = document.getElementById('seleccionar').value
    let cant = document.getElementById('cantidad').value
    let precio = document.getElementById('precio').value
    let listaProductos = document.getElementById('tablaProductos').value
    let subtotal = calcular (cant, precio)
    tablaProductos.innerHTML = tablaProductos.innerHTML + "<tr>"+
                                                                "<td>"+producto+"</td>"+
                                                                "<td>"+cant+"</td>"+
                                                                "<td>"+precio+"</td>"+
                                                                "<td name='subtotal'>"+subtotal+"</td>"+
                                                            "</tr>"
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


