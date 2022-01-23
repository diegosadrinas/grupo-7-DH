const regExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/


window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-register")

    formulario.addEventListener("submit", function(e){

        let errores = [];

        let campoEmail = document.querySelector(".email-input")

        if (campoEmail.value == "" ){
            errores.push('Ingresa Mail')
            let errorMail = 'Ingresa Mail'
            document.querySelector('.span-email').innerHTML = errorMail
        } else if (regExEmail.test(campoEmail.value)){
            errores.push("Debe ser un email valido")
            document.querySelector(".span-email").innerHTML = errorMail;
        } 
        
        let campoNombre = document.querySelector(".email-input")

        if (campoNombre.value == "" || campoNombre.length < 2){
            errores.push('Ingresa Nombre, min 2 caracteres')
            let errorNombre = 'Ingresa Nombre, min 2 caracteres'
            document.querySelector('.span-nombre').innerHTML = errorNombre
        }

        let campoApellido = document.querySelector(".email-input")

        if (campoApellido.value == "" || campoApellido.length < 2){
            errores.push('Ingresa Aapeliido, min 2 caracteres')
            let errorApellido = 'Ingresa Apellido, min 2 caracteres'
            document.querySelector('.span-apellido').innerHTML = errorApellido
        }
        
        let campoPassword = document.querySelector(".email-input")

        if (campoPassword.value == "" || campoPassword < 8){
            errores.push('Ingresa Pass, min 8 Caracteres')
            let errorPassword = 'Ingresa Pass, min 8 Caracteres'
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