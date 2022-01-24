window.addEventListener("load", function(){

    function validarExt (){
        
        var archivoInput = document.querySelector('.image');
        var archivoRuta = archivoInput.value;
        var extPermitidas = /(.pdf|.jpg|.jpeg|.gif)$/i;4

        if (!extPermitidas.exec(archivoRuta)) {
            alert('Los archivos permitidos son: JPG, JPEG, PDF y GIF')
            archivoInput.value = "";
            return false
        }
        else {
            if (archivoInput.files && archivoInput.files[0]){
                var visor = new FileReader();
                visor.onload=function(e){
                    document.querySelector('.visorArchivo').innerHTML =
                    '<embed src="'+e.target.result+'" width="500" heigth="500">'
                }
                visor.readAsDataURL(archivoInput.files[0]);
            }
        }
    
    
})