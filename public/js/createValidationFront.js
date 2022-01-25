window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-create")


    formulario.addEventListener("submit", function(e){

        console.log('ASDASDASDASDASDA');


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

        let campoImg = document.querySelector(".image")

        if (campoImg.value == ""){
            errores.push = "Debes subir una imagen"
            document.querySelector(".span-image").innerHTML = errores.artistimg;

        }else if (campoImg.value.split(".").pop()){
            let extensiones = ["png", "jpg", "gif", "tiff"]                
                if (!extensiones.includes(campoImg.value.split(".").pop())) {
                    errores.push = "El archivo debe ser: png, jpg, gif, tiff!"
                    document.querySelector(".span-image").innerHTML = errores.artistimg;
                  }
            
        }

        if (errores.length > 0 ) {
            
            e.preventDefault()

            let ulErrores = document.querySelector('div.errores ul');

            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"                
            
        }
    })
})