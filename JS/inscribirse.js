const valEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
const valName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/i
const valNumb =  /^[0-9]+$/i 

import {Usuarios} from './Usuarios.js'

$(document).ready(function(){
let cuentas = []
let i=0;
// Funcion para validacion de campos de la suscripcion
let suscripcion = (e) =>{
        switch(e.target.name){
            case "nombre":
                        if(!isNaN(e.target.value)){
                            $('.errorName').remove()
                            $('#nameError').append(`<p class="text-danger errorName">Ingrese solo letras</p>`)
                        }
                            else{
                                $('.errorName').remove()
                            }
                    break;
            case "apellido":
                            if(!isNaN(e.target.value)){
                                $('.lastError').remove()
                                $('#lastnameError').append(`<p class="text-danger lastError">Ingrese solo letras</p>`)
                            }
                                else{
                                    $('.lastError').remove()
                                }
                    break;
            case "email2": 
                            if(!valEmail.test(e.target.value)){
                                $('.submailError').remove()
                                $('#alertSubMAil').append(`<p class="text-danger submailError">Ingreso un formato de mail erroneo</p>`)
                            }
                                else{
                                    $('.submailError').remove()
                                }
                    break;
            case "contraseña2":
                                if(isNaN(e.target.value)){
                                    $('.subpassError').remove()
                                    $('#alertSubPass').append(`<p class="text-danger subpassError">Ingrese una contraseña de solo números</p>`)
                                }
                                    else{
                                        $('.subpassError').remove()
                                    }
                    break;
            case "contraseñaRep":
                let password = document.querySelector('#GET-pass').value
                                    if(e.target.value !== password){
                                            $('.repeatError').remove()
                                            $('#alertSubRepeat').append(`<p class="text-danger repeatError">Ingrese una contraseña de solo números</p>`)
                                    }
                                            else{
                                                $('.repeatError').remove()
                                            }
                    break;
            default: console.log('EXITO!!!')
        }
}
    //Llamada a la funcion de validacion en los inputs               
            $('input').keyup((e)=>{
                suscripcion(e)
                $('.padre').css('height','100%')
                })

            
            $('input').blur((e)=>{
                suscripcion(e)
                $('.padre').css('height','100%')
                })

    //Datos de los inputs 
            $('#botonSub').click((e) =>{
                e.preventDefault()
                    $('.aparecer').css('height','100%')                
                        let nomb = document.querySelector('#GET-name').value
                        let apell = document.querySelector('#GET-apellido').value
                        let mail = document.querySelector('#GET-mail').value
                        let pass = document.querySelector('#GET-pass').value


                                //Validando datos al hacer click en el boton enviar y pushea los datos en un array 
                                             if( isNaN(nomb) == false || isNaN(apell) == false || valEmail.test(mail) == false || valNumb.test(pass) == false){
                                                    console.log(isNaN(nomb))
                                                    console.log(isNaN(apell))
                                                    console.log( valEmail.test(mail))
                                                    console.log(valNumb.test(pass))
                                                    console.log('no funciono')
                                                       }
                                                    else{
                                                        i++
                                                        let users = new Usuarios(nomb,apell,mail,pass,i)
                                                            cuentas.push(users)
                                                            let h = {}

                                                            cuentas = cuentas.filter(o => h[o.email] ? false : h[o.email] = true)
                                        
                                                                            localStorage.setItem('usuario',JSON.stringify(cuentas))
                                                                                                    let volver = document.querySelector('#botonSub')

                                                                                                    volver.setAttribute("href","./index.html")
                                                            }
                                                                
            })
        $('.aparecer').hide()
        setTimeout(()=>{
                    $(".aparecer").slideDown(1000) 
            },1000  )              
})
