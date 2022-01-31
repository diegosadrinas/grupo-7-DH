window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-create")


    formulario.addEventListener("submit", function(e){

        // e.preventDefault()

        let errores = false;

        let campoName = document.querySelector("#name")

        console.log(campoName);

        if (campoName.value == ""){
            errores = true
            let errorName = 'Ingresa Nombre'
            document.querySelector('.span-name').innerHTML = errorName
        } else if (campoName.length < 5){
            errores = true
            let errorName = 'Debe tener min 5 caracteres'
            document.querySelector('.span-name').innerHTML = errorName
        }
        
        let campoDescription = document.querySelector("#description")

        if (campoDescription.value == ""){
            errores = true
            let errorDescription = 'Ingresa Descripcion'
            document.querySelector('.span-description').innerHTML = errorDescription
        }

        let campoPrice = document.querySelector("#price");

        if (campoPrice.value == ""){
            errores = true
            let errorPrice = "Ingresa Precio"
            document.querySelector('.span-price').innerHTML = errorPrice
        }

        let campoImg = document.querySelector("#image")

        if (campoImg.value == ""){
            let errorDescription = 'Debes subir una imagen'
            errores = true
            document.querySelector(".span-image").innerHTML = errorDescription

        }else if (campoImg.value.split(".").pop()){
            let extensiones = ["png", "jpg", "gif", "tiff"]                
                if (!extensiones.includes(campoImg.value.split(".").pop())) {
                    errores = true
                    document.querySelector(".span-image").innerHTML = errorDescription
                  }
            
        }

        if (errores) {
            
            e.preventDefault()         
        
        }
    })
})