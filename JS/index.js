let carro = []
const productosCarro = document.querySelector('#productosCarro')
const botonVaciar = document.querySelector('.vaciarCarro')
const totalPagar = document.querySelector('.totalPagar')

$(document).ready(function(){
    //let inicio = localStorage.getItem('cant');
    let carroCant = document.querySelector('#contCarro').textContent = localStorage.getItem('cant')

    //Pintando productos destacados
        fetch("../JSON/destacados.json")
            .then(data => data.json())
            .then(data =>{ 
                data.forEach(element => {
                        $('.destacados').append(`
                                                <div class="produDestac">
                                                    <img src="${element.imagen}" class="imgDestac">
                                                    <p class="nameDestac">${element.nombre}</p>
                                                    <h6 class="text-danger">$${element.precio}</h6>
                                                    <button id="${element.id}" class="addCarrito">AGREGAR</button> 
                                                </div>                        
                        `)
                        
                        //Agregando productos al carrito
                            $(`#${element.id}`).click((e)=>{
                                if(e.target){
                                    let carroCant = document.querySelector('#contCarro').textContent 

                                                    const producto = {
                                                        id: element.id,
                                                        nombre: element.nombre,
                                                        precio: element.precio,
                                                        imagen: element.imagen,
                                                        cantidad: 1
                                                    }
                                                        carro.push(producto)

                                                                    carritoVer()

                                                                    vaciarCarro()

                                                                        totalPagar.textContent = element.precio

                                    }
                                            else{
                                                console.log('no funciona')
                                            }
                            })
                });
            })

            
                            
            
            .catch(data=>{
                console.log('error')
            })

                $('.comprasCarro').click(()=>{
                    $('.menuCarrito').css("display","block")
                    })

                        $('#cerrarCarro').click(()=>{
                            $('.menuCarrito').css("display","none")
                        })

                                                //Quedan guardados localmente en la pagina
                                                if(localStorage.getItem('items')){

                                                    carro = JSON.parse(localStorage.getItem('items'))
                
                                                            carritoVer()
                                                            vaciarCarro()

                                                                
                                                }
    })

    
    // Pintando productos en el carro (funcion)
const carritoVer = () =>{
    productosCarro.innerHTML = " "
    carro.forEach((element,indice)=>{

        let   produ   =  `<div class="cajaCarrito">
                               <img src="${element.imagen}" class="imgCarrito">
                               <p>${element.nombre}</p>
                               <h5 class="text-danger precioCarrito">$${element.precio*element.cantidad} x <span class="text-primary cantiCarro">${element.cantidad}</span></h5>
                               <button class="btn btn-primary masProdu" id="${indice}">+</button>    
                           </div>
                           <hr>
                           ` 

                 $('#productosCarro').append(produ)

                 localStorage.setItem('items',JSON.stringify(carro))    

})  
}

const vaciarCarro = () =>{
    botonVaciar.addEventListener('click',() => {
        carro = []
        productosCarro.innerHTML = " "

            localStorage.removeItem('items')
    })
}

