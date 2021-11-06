const contenedor = document.getElementById('productos')
let sumaCarrito = document.createElement('div')
let contador = document.getElementById('cont')
const carro = document.getElementById('carro')
let ventaEmergente = document.createElement('div')

ventaEmergente.classList.add('ventanaFloat')

// array de objetos
const productos = [

    {id: 1, img: '../Images/netbook.jfif', descripcion: "Netbook Hp 16 ", precio: 8000},
    {id: 2, img: '../Images/smartv.jpg', descripcion: "Smartv 45 pg", precio: 45000},
    {id: 3, img: '../Images/ps4.png', descripcion: "Playstation 4", precio: 60000},
    {id: 4, img: '../Images/ps5.jpeg',descripcion: "Playstation 5", precio: 100000},
    {id: 5, img: '../Images/mouse.png',descripcion: "Mouse Gaming X-G200", precio: 1000},
    {id: 6, img: '../Images/impresoras.jfif',descripcion: "Impresora", precio: 19000},
    {id: 7, img: '../Images/nintendo.png',descripcion: "Nintendo Switch", precio: 70000}
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
                img.classList.add('card-img-top')
                contend.append(descrip)
                descrip.classList.add('card-title')
                contend.append(precio)
                precio.classList.add('card-text')
                contend.append(boton)
                contend.classList.add('contenedores')
                contend.classList.add('card')
                contend.style.width = '14rem'
                

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

class Animal{
    constructor(tipos,genero){
        this.tipos = tipos
        this.genero = genero
    }
}


class Perro extends Animal{
    constructor(tipos,genero,pelaje){
        super(tipos,genero)
        this.pelaje = pelaje

    }
    ladrar(){
        console.log('Guau Guau')
    }
}

const perritoMalvado = new Perro('Perro pila','Macho','Calvo')


console.log(perritoMalvado)     
perritoMalvado.ladrar()