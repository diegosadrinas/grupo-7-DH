window.addEventListener("load", function(){
    let formulario = document.querySelector(".formulario")

    formulario.addEventListener("submit", function(e){

        let errores = [];

        let campoName = document.querySelector(".name")

        if (campoName.value == ""){
            errores.push('FALTA NOMBRE')
            let errorNombre = 'INGRESA NOMBRE'
            document.querySelector('.span-name').innerHTML = errorNombre
        } else if (campoName.length < 5){
            errores.push('Debe tener min 5 caracteres')
            let errorNombre = 'Debe tener min 5 caracteres'
            document.querySelector('.span-name').innerHTML = errorNombre
        }
        
        let campoDescription = document.querySelector(".description")

        if (campoDescription.value == ""){
            errores.push('FALTA DESCRIPCION')
            let errorDescription = 'INGRESA DESCRIPCION'
            document.querySelector('.span-description').innerHTML = errorDescription
        } else if (campoDescription.length < 20){
            errores.push('Debe tener min 20 caracteres')
            let errorDescription = 'Debe tener min 20 caracteres'
            document.querySelector('.span-description').innerHTML = errorDescription
        }

        // VALIDAR IMAGEN (JPG, JPEG, PNG, GIF)


        if (errores.length > 0 ) {
            e.preventDefault()

            let ulErrores = document.querySelector('div.errores ul');
            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"                
            }
        }
    })
})