$(document).ready(function(){
    let inicio = localStorage.getItem('cant');
    let carroCant = document.querySelector('#contCarro').textContent = localStorage.getItem('cant')
        fetch("./JSON/destacados.json")
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

                                                    $('.menuCarrito').append(`<div class="cajaCarrito">
                                                                                <img src="${element.imagen}" class="imgCarrito">
                                                                                <p>${element.nombre}</p>
                                                                                <h6 class="text-danger precioCarrito">$${element.precio}</h6>
                                                                             </div>
                                                                             <hr>
                                                                                `)
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
})
