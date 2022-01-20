window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-register")

    formulario.addEventListener("submit", function(e){

        let errores = [];

        let campoEmail = document.querySelector(".email-input")

        if (campoEmail.value == ""){
            errores.push('FRONT - FALTA MAIL')
            let errorMail = 'INGRESA MAIL F'
            document.querySelector('.span-email').innerHTML = errorMail
        }
        
        let campoNombre = document.querySelector(".email-input")

        if (campoNombre.value == ""){
            errores.push('FRONT - FALTA NOMBRE')
            let errorNombre = 'INGRESA NOMBRE F'
            document.querySelector('.span-nombre').innerHTML = errorNombre
        }

        let campoApellido = document.querySelector(".email-input")

        if (campoApellido.value == ""){
            errores.push('FRONT - FALTA APELLIDO')
            let errorApellido = 'INGRESA APELLIDO F'
            document.querySelector('.span-apellido').innerHTML = errorApellido
        }
        
        let campoPassword = document.querySelector(".email-input")

        if (campoPassword.value == ""){
            errores.push('FRONT - FALTA PASS')
            let errorPassword = 'INGRESA PASS F'
            document.querySelector('.span-password').innerHTML = errorPassword
        }

        if (errores.length > 0 ) {
            e.preventDefault()

            let ulErrores = document.querySelector('div.errores ul');
            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"                
            }
        }
    })
})