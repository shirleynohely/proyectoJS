document.addEventListener("DOMContentLoaded", () =>{ 
    getData() 
    if(localStorage.getItem("clave")){
        lista = JSON.parse(localStorage.getItem("clave"))
        agregarCarrito()
    }
  } )

  const almacenarLista = () => {
      localStorage.setItem("clave", JSON.stringify(lista))
  }
