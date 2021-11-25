import {Compra} from "./Compra.js";
$(document).ready(function(){
const compra = new Compra()   
// Inicializando para el Carrito
let i;
i = JSON.parse(localStorage.getItem('contador'))
let contador;    
// Consumiendo archivo de productos
const URL = 'JSON/productos.json'
    $.getJSON(URL,function(respuesta, estado){

        if(estado === "success"){
            let productos = respuesta;
        // Incluyendo la los datos en las cajas
              for(const producto of productos) {
                            $('#productos').append(`<div class="contenedores card">
                                                        <img src="${producto.img}" class="card-img-top">
                                                        <h5 class="card-title">${producto.descripcion}</h5>
                                                        <p class="card-text bordes">$${producto.precio}</p>
                                                        <button class="btn btn-primary boton" id="${producto.id}">Agregar</button>
                                                    </div>`)

                                        // Contador del Carrito 
                                                        $(`#${producto.id}`).click((e)=>{    
                                                            i++
                                                                localStorage.setItem('contador',JSON.stringify(i))
                                                                contador = localStorage.getItem('contador')
                                                                    $('#cont').text(contador)
                                                                            if(e.target == producto.id){
                                                                                    compra.producto = producto.descripcion
                                                                                    compra.precio += producto.precio
                                                                                    compra.cantidad += 1 
                                                                            }
                                                                            console.log(compra.cantidad)
                                                    })  
                                                                    }
            }                           
            else
                console.log('no funciono')
    })
    $('#cont').text(localStorage.getItem('contador'))

            })
