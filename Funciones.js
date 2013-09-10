$(document).ready(function () {
    $("#imagenes").hide(); /*Oculta las imagenes de la parte superior*/
    $("#audio").hide(); /*Oculta la div del pulsador para despues hacerla*/
    $("#audio").fadeIn(1000); /*aparecer inmediatamanete al cargar la página (estética)*/



    var numImag = Math.floor(Math.random() * (4)); /*Sonido aleatorio*/
    var contador = 0;
    

    function BienHecho() {
    
    $("div").fadeOut(1000);
    $("body").append("<img id='bien' src='fotos/bien2.jpg' alt='Respuesta correcta' >"); /*Añade la imagen del Smiley 'correcto'*/
    $("img").hide(); /*Oculta la imagen añadida en la etiqueta anterior para que no aparezca abruptamente*/
    $("#mal").hide();
    $("#bien:hidden").delay(1500).fadeIn(1500); /*Hace aparecer la imagen de 'correcto' cuando todas las div han 
                                                desaparecido y poco a poco para mejorarlo estéticamente*/
    
    
    };

    function MalHecho() {
    contador++;

        if (contador==1) {
            $("div").fadeOut(1000);
            $("body").append("<img id='mal' src='fotos/mal.jpg' alt='Respuesta incorrecta' >"); /*Añade la imagen del Smiley 'mal'*/
            $("#mal").hide(); /*Oculta la imagen añadida en la etiqueta anterior para que no aparezca abruptamente*/
            $("#mal:hidden").delay(1500).fadeIn(1500); /*Hace aparecer la imagen de 'mal' cuando todas las div han 
                                                       desaparecido y poco a poco para mejorarlo estéticamente*/        
            $("img").click(function(){
                $("#mal").fadeOut(1000);                  //Al hacer click sobre el emoticono de "mal" la oculta y hace aparecer 
                $("div:hidden").delay(1500).fadeIn(1500); //las imagenes anteriores.
            });
        };

        if (contador != 1){
            $("div").fadeOut(1000);
            $("#mal:hidden").delay(1500).fadeIn(1500);
        };
    
    }

    /*Efecto del pulsador*/
    
    $('#audio').click(function(){ /*Al hacer click sobre el pulsador rojo activará el audio de un animal y aparecerán las imágenes*/
        
        $('audio').get(numImag).play(); /*De todas las etiquetas 'audio' seleccionamos, con el método get(), la que nos interesa, como si fuera un array*/
        $("div:hidden").fadeIn(1500); /*Hace aparecer las div ocultas*/
        $("#contenedor").css("margin-top", "40px"); /*Propiedad CSS para que, después del click, el pulsador se mantenga en su sitio*/
    });

    /*Comprobación imagen seleccionada*/
    $("#imagenes").children().click(function(){ //Función que se dispara cada vez que pulsemos un 'hijo' de la div 'imagenes'
        var clase = $(this).attr("class");      //Asigna a la variable 'clase' el valor del atributo class
        if (clase == numImag) {                 //Compara el valor de la class con el numero aleatorio. En este caso se han hecho coincidir, guarda relación...
            BienHecho();                        //...con el orden en el que están puestos en el HTML.
        }
        else{
            MalHecho();
        };
    });

});