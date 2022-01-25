const regExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/


window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-register")

    formulario.addEventListener("submit", function(e){

        let errores = false;

        let campoEmail = document.querySelector(".email-input")
       
        if (campoEmail.value == "" ){
            errores = true
            let errorMail = 'Ingresa un Email'
            document.querySelector('.span-email').innerHTML = errorMail
        } else if (!regExEmail.test(campoEmail.value)){
            errores = true
            document.querySelector(".span-email").innerHTML = errorMail;
        } 
        
        let campoNombre = document.querySelector(".nombre-input")

        if (campoNombre.value == "" || campoNombre.length < 2){
            errores = true
            let errorNombre = 'Ingresa un Nombre de al menos 2 caracteres'
            document.querySelector('.span-nombre').innerHTML = errorNombre
        }

        let campoApellido = document.querySelector(".apellido-input")

        if (campoApellido.value == "" || campoApellido.length < 2){
            errores = true
            let errorApellido = 'Ingresa Apellidode al menos 2 caracteres'
            document.querySelector('.span-apellido').innerHTML = errorApellido
        }
        
        let campoPassword = document.querySelector(".password-input")

        if (campoPassword.value == "" || campoPassword < 8){
            errores = true
            let errorPassword = 'Ingresa Pass de al menos 8 Caracteres'
            document.querySelector('.span-password').innerHTML = errorPassword
        }

        if (errores) {
            e.preventDefault()       
            
        }
    })
})