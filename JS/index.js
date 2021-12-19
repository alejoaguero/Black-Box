let carro = []
const productosCarro = document.querySelector('#productosCarro')
const botonVaciar = document.querySelector('.vaciarCarro')
const totalPagar = document.querySelector('.totalPagar')     
let cont = localStorage.getItem('cant')
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
                                    //cantidad de productos agregados
                                    cont++

                                    localStorage.setItem('cant', cont)

                                                carroCant = document.querySelector('#contCarro').textContent = cont

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
                                                                    totalCarro()
                                                                
                                                                
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
                                                            totalCarro()
                                                                
                                                }

            botonVaciar.addEventListener('click', () =>{
                cont = 0
                carroCant = document.querySelector('#contCarro').textContent = " "
            })
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

//funcion para vaciar el carro

const vaciarCarro = () =>{
    botonVaciar.addEventListener('click',() => {
        carro = []
        productosCarro.innerHTML = " "

            localStorage.removeItem('items')
            localStorage.removeItem('cant')
    })
}

//Calcular el el total de productos agregados y a la vez lo elimina al hacer boton vaciar

const totalCarro = () =>{
    const total = carro.map(element => element.precio).reduce((prev,curr) => prev + curr,0)

        totalPagar.textContent = total

        botonVaciar.addEventListener('click',()=>{
            totalPagar.textContent = " "
        })
}   