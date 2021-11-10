$(document).ready(function(){

    const productos =   [ 
            {id: 1, img: 'Images/netbook.jfif', descripcion: "Netbook Hp 16 ", precio: 8000},
            {id: 2, img: 'Images/smartv.jpg', descripcion: "Smartv 45 pg", precio: 45000},
            {id: 3, img: 'Images/ps4.png', descripcion: "Playstation 4", precio: 60000},
            {id: 4, img: 'Images/ps5.jpeg',descripcion: "Playstation 5", precio: 100000},
            {id: 5, img: 'Images/mouse.png',descripcion: "Mouse Gaming X-G200", precio: 1000},
            {id: 6, img: 'Images/impresoras.jfif',descripcion: "Impresora", precio: 19000},
            {id: 7, img: 'Images/nintendo.png',descripcion: "Nintendo Switch", precio: 70000}

    ]

    let i=0;
    let precioTotal=0;
        for (const producto of productos) {
               
            $('#productos').append(`<div class="card contenedores">
                                        <img src="${producto.img}" class="card-img-top">
                                        <h5 class="card-title">${producto.descripcion}</h5>
                                        <p>${producto.precio}</p>
                                        <button id="${producto.id}" class="captura btn btn-primary">Agregar</button>
                                    </div>`)

                        
                        $(`#${producto.id}`).click( function capturarProdu(e) {     
                            if(e.target){
                                i++;
                                $('#cont').text(i);
                                        
                                    precioTotal += producto.precio;
                                }
                                
                                $('.pop__up').append(`<p>${producto.descripcion} / Precio: $${producto.precio}</p>`)
                                    
                        })
                    }

                    
                            $('#carro').click(function ventaEmergente(){

                                $('.pop__up').addClass('ventanaCarrito')

                            })


            })