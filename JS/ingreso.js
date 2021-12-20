$(document).ready(function(){
        let nameSearch
        $('#botonIngresar').click(()=>{
                //Capturando valor  del localStorge de los usuarios
                let cuentas = JSON.parse(localStorage.getItem('usuario'))
                let emailIngreso = document.querySelector('#ingresoMail').value
                let passIngreso = document.querySelector('#ingresoPass').value
                //Iterar los usuarios y validacion si se encuentra registrado
                        cuentas.forEach(element => {
                                if(emailIngreso !== element.email || passIngreso !== element.pass){
                                        $('.mailSesion').remove()
                                        $('#errorMail').append(`<p class="text-warning mailSesion">Ingreso un mail no valido</p>`)
                                        $('.passSesion').remove()
                                        $('#errorPass').append(`<p class="text-warning passSesion">Ingreso una contraseña no valida</p>`)
                                }
                                        else{
                                                $('.mailSesion').remove()
                                                $('.passSesion').remove()
                                                        let inicio = document.querySelector('#botonIngresar')

                                                                inicio.setAttribute("href","../index.html")
                                        }

                        });
        })
        $(".ingresoDatos").hide()
        setTimeout(()=>{
                $(".ingresoDatos").slideDown(1000) 
        },1000)







})