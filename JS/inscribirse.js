let valEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
let valName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/i

$(document).ready(function(){
let usuarios = []
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
        
        $('input').keyup((e)=>{

                suscripcion(e)
                $('.padre').css('height','100%')
        })

                $('#botonSub').click((e) =>{

                    e.preventDefault()

                    let nomb = $('#GET-name').value
                    let apell = $('#GET-apellido').value
                    let mail = $('#GET-mail').value
                    let pass = $('#GET-pass').value
                                        
                                usuarios.push({
                                            nombre: nomb,
                                            apellido:apell,
                                            email: mail,
                                            contraseña: pass
                                        })
                    
                        console.log(usuarios)
                })


        
})
