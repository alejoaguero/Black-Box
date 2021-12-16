$(document).ready(function(){
    let carro = {}
    
    let inicio = localStorage.getItem('cant');
    let carroCant = document.querySelector('#contCarro').textContent = localStorage.getItem('cant')
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
                            $(`#${element.id}`).click((e)=>{
                                if(e.target){
                                    let cons = ++inicio
                                            localStorage.setItem('cant',cons)

                                                let carroCant = document.querySelector('#contCarro').textContent = cons

                                                    const producto = {
                                                        id: element.id,
                                                        nombre: element.nombre,
                                                        precio: element.precio,
                                                        imagen: element.imagen,
                                                        cantidad: 1
                                                    }
                                                            if(carro.hasOwnProperty(producto.id)){
                                                                producto.cantidad  = carro[producto.id].cantidad + 1
                                                            }                   
                                                
                                                                carro[producto.id] = {...producto}

                                                                const productosCarro = document.querySelector('#productosCarro')
                                                                productosCarro.innerHTML = " "


                                                                    Object.values(carro).forEach((element)=>{
                                                                                 let   produ   =  `<div class="cajaCarrito" id="${element.id}">
                                                                                                        <img src="${element.imagen}" class="imgCarrito">
                                                                                                        <p>${element.nombre}</p>
                                                                                                        <h5 class="text-danger precioCarrito">$${element.precio}</h5>
                                                                                                        <p>${element.cantidad}</p>
                                                                                                    </div>
                                                                                                    <hr>
                                                                                                    `
                                                                                          $('#productosCarro').append(produ)

                                                                                        localStorage.setItem('items',JSON.stringify(carro))
                                                                    })  
                                    }
                                    else{
                                        console.log('no funciona')
                                    }                                        
                            })

                                if(localStorage.getItem('items')){
                                    carro = JSON.parse(localStorage.getItem('items'))
                                    
                                    productosCarro.innerHTML = " "

                                    Object.values(carro).forEach((element)=>{
                                        let   produ   =  `<div class="cajaCarrito" id="${element.id}">
                                                               <img src="${element.imagen}" class="imgCarrito">
                                                               <p>${element.nombre}</p>
                                                               <h5 class="text-danger precioCarrito">$${element.precio}</h5>
                                                               <p>${element.cantidad}</p>
                                                           </div>
                                                           <hr>
                                                           `

                                                           $('#productosCarro').append(produ)
                                            })
                            
                                }
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
})