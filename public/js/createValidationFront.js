window.addEventListener("load", function(){
    let formulario = document.querySelector(".formulario")

    formulario.addEventListener("submit", function(e){

        let errores = [];

        let campoName = document.querySelector(".name")

        if (campoName.value == ""){
            errores.push('FALTA NOMBRE')
            let errorName = 'INGRESA NOMBRE'
            document.querySelector('.span-name').innerHTML = errorName
        } else if (campoName.length < 5){
            errores.push('Debe tener min 5 caracteres')
            let errorName = 'Debe tener min 5 caracteres'
            document.querySelector('.span-name').innerHTML = errorName
        }
        
        let campoDescription = document.querySelector(".description")

        if (campoDescription.value == ""){
            errores.push('FALTA DESCRIPCION')
            let errorDescription = 'INGRESA DESCRIPCION'
            document.querySelector('.span-description').innerHTML = errorDescription
        }

        let campoPrice = document.querySelector(".pricce");

        if (campoPrice.value == ""){
            errores.push('Fata Precio')
            let errorPrice = "Ingresa Precio"
            document.querySelector('.span-price').innerHTML = errorPrice
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