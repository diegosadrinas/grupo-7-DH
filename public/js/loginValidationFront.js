const regExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

window.addEventListener("load", function(){
    let formulario = document.querySelector(".loginForm")

    formulario.addEventListener("submit", function(e){

        let errores = false

        let campoEmail = document.querySelector(".email-input")

        if (campoEmail.value == ""){
            errores = true
            let errorMail = 'Ingresa Mail'
            document.querySelector('.span-email').innerHTML = errorMail
        }  else if (!regExEmail.test(campoEmail.value)){
            errores = true
            document.querySelector(".span-email").innerHTML = errorMail;
        }

        let campoPassword = document.querySelector(".password")

        if (campoPassword.value == ""){
            errores = true
            let errorPassword = 'Ingresa Pass'
            document.querySelector('.span-password').innerHTML = errorPassword
        }

        if (errores) {
            e.preventDefault()           
            
        }
    })
})