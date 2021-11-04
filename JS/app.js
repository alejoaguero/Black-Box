const contenedor = document.getElementById('productos')
let sumaCarrito = document.createElement('div')
let contador = document.getElementById('cont')
const carro = document.getElementById('carro')
let ventaEmergente = document.createElement('div')

ventaEmergente.classList.add('ventanaFloat')

// array de objetos
const productos = [
    {id: 1, img: '../images/netbook.jfif', descripcion: "Netbook Hp 16 ", precio: 8000},
    {id: 2, img: '../images/smartv.jpg', descripcion: "Smartv 45 pg", precio: 45000},
    {id: 3, img: '../images/ps4.png', descripcion: "Playstation 4", precio: 60000},
    {id: 4, img: '../images/ps5.jpeg',descripcion: "Playstation 5", precio: 100000},
    {id: 5, img: '../images/camara.gif',descripcion: "Camara Olimpus", precio: 25000}
];
let i=1;   
for (const producto of productos) {
    
    let contend = document.createElement('div')
    let descrip = document.createElement('p')
    let img = document.createElement('img')
    let precio = document.createElement('h5')
    let boton = document.createElement('button')

            img.src = producto.img
            descrip.textContent = producto.descripcion
            precio.textContent = producto.precio
            boton.textContent = 'Agregar'
            boton.id = producto.id

                contend.append(img)
                contend.append(descrip)
                contend.append(precio)
                contend.append(boton)
                contend.classList.add('contenedores')

        contenedor.appendChild(contend)
        
            boton.addEventListener('click', function captura(e){
             let textProduct = document.createElement('p')
                contador.innerHTML = i++
                    textProduct.innerHTML = producto.descripcion +" " +  'Precio: '+ producto.precio
                        if(e.target){

                            ventaEmergente.append(textProduct)
                        }
            })
            
            carro.addEventListener('click',function mostrarCarrito(){
                        contenedor.appendChild(ventaEmergente);     
            })
}
