cards.addEventListener("click", evento =>{
  agregarProducto(evento)
})

items.addEventListener("click", evento =>{
  aumentarDisminuir(evento)
})

items.addEventListener("click", evento =>{
  eliminarProducto(evento)
})

const getData = async () =>{
  try {
    const response = await fetch("js/productos.json")
    const data = await response.json()
    agregarCard(data)
  } catch (error) {
    console.log(error)  
  }
}

const agregarCard = data =>{
  data.forEach(productos => {
    template.querySelector("h5").textContent = productos.producto
    template.querySelector("span").textContent = productos.precio
    template.querySelector("img").setAttribute("src",productos.imagen)
    template.querySelector(".btn-dark").dataset.id = productos.id

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
  })
  cards.appendChild(fragment)
}
 const agregarProducto = (evento) =>{
   if(evento.target.classList.contains("btn-dark")){
    setLista(evento.target.parentElement)
   }
   evento.stopPropagation()

 }
 const setLista = (objeto) =>{
   const prod = {
     id: objeto.querySelector(".btn-dark").dataset.id,
     producto: objeto.querySelector("h5").textContent,
     precio: objeto.querySelector("span").textContent,
     cantidad: 1
   }
   if(lista.hasOwnProperty(prod.id)){
     prod.cantidad = lista[prod.id].cantidad + 1
   }
   lista[prod.id] = {...prod}
   agregarCarrito()
 }

 const agregarCarrito =()=>{
  document.getElementById("tabla").style.display = "block" 
  items.innerHTML = ""
  Object.values(lista).forEach(prod =>{
    // templateCarrito.querySelector("th").textContent = prod.id
    templateCarrito.querySelectorAll("td")[0].textContent = prod.producto
    templateCarrito.querySelectorAll("td")[1].textContent = prod.cantidad
    templateCarrito.querySelector(".btn-light").dataset.id = prod.id
    templateCarrito.querySelector(".btn-dark").dataset.id = prod.id
    templateCarrito.querySelector(".btn-danger").dataset.id = prod.id
    templateCarrito.querySelector("span").textContent = prod.cantidad * prod.precio

    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
  })
  items.appendChild(fragment)
  agregarFooter()
  almacenarLista()
 }

 const agregarFooter = () =>{
  footer.innerHTML = ""
  if(Object.keys(lista).length === 0){
  footer.innerHTML = '<th scope="row" colspan="5"></th>'
  contadorCarrito.innerHTML= ""
  return
}
const sumarCantidad = Object.values(lista).reduce((acc,{cantidad})=> acc+cantidad,0)
const sumarPrecio = Object.values(lista).reduce((acc,{cantidad,precio})=> acc + cantidad * precio,0)

templateFooter.querySelectorAll("td")[0].textContent = sumarCantidad
templateFooter.querySelector("span").textContent = sumarPrecio

const clone = templateFooter.cloneNode(true)
fragment.appendChild(clone)
footer.appendChild(fragment)

contadorCarrito.innerText = sumarCantidad

const eliminarTodo = document.getElementById("vaciar-carrito")
eliminarTodo.addEventListener("click", ()=> {
lista = {}
contadorCarrito.innerHTML= ""
agregarCarrito()
})

}
const aumentarDisminuir = (evento) =>{
if (evento.target.classList.contains("btn-light")){
  const prod = lista[evento.target.dataset.id]
  prod.cantidad++
  lista[evento.target.dataset.id] = {...prod}
  agregarCarrito()
}
if (evento.target.classList.contains("btn-dark")){
  const prod = lista[evento.target.dataset.id]
  prod.cantidad--
  if(prod.cantidad == 0){
    delete lista[evento.target.dataset.id]
  }
  agregarCarrito()
}
}
const eliminarProducto = (evento) =>{
  if(evento.target.classList.contains("btn-danger")){
    delete lista[evento.target.dataset.id]
  }
  agregarCarrito()
}
