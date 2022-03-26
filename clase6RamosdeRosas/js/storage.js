const almacenarInfo = () =>{
    localStorage.setItem("producto", producto.value)
    localStorage.setItem("cantidad", cantidad.value)
    localStorage.setItem("precio",precio.value)
}
const recuperarInfo = () =>{
    producto.value = localStorage.getItem("producto")
    cantidad.value = localStorage.getItem("cantidad")
    precio.value = localStorage.getItem("precio")
}

consultar.addEventListener('click',almacenarInfo)

recuperarInfo()