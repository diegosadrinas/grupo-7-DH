window.addEventListener("load", function(){
    let formulario = document.querySelector(".loginForm")

    formulario.addEventListener("submit", function(e){

        let errores = [];

        let campoEmail = document.querySelector(".email-input")

        if (campoEmail.value == ""){
            errores.push('FRONT - FALTA MAIL')
            let errorMail = 'INGRESA MAIL F'
            document.querySelector('.span-email').innerHTML = errorMail
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