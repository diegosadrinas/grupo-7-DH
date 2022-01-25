const regExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

window.addEventListener("load", function(){
    let formulario = document.querySelector(".loginForm")

    formulario.addEventListener("submit", function(e){

        let errores = [];

        let campoEmail = document.querySelector(".email-input")

        if (campoEmail.value == ""){
            errores.push('Ingresa Mail')
            let errorMail = 'Ingresa Mail'
            document.querySelector('.span-email').innerHTML = errorMail
        }  else if (!regExEmail.test(campoEmail.value)){
            errores.push("Debe ser un email valido")
            document.querySelector(".span-email").innerHTML = errorMail;
        }

        let campoPassword = document.querySelector(".password")

        if (campoPassword.value == ""){
            errores.push('Ingresa Pass')
            let errorPassword = 'Ingresa Pass'
            document.querySelector('.span-password').innerHTML = errorPassword
        }

        if (errores.length > 0 ) {
            e.preventDefault()

            let ulErrores = document.querySelector('div.errores ul');
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"                
            
        }
    })
})