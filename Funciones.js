$(document).ready(function () {
    $("#imagenes").hide(); /*Oculta las imagenes de la parte superior*/
    $("#audio").hide(); /*Oculta la div del pulsador para despues hacerla*/
    $("#audio").fadeIn(1000); /*aparecer inmediatamanete al cargar la página (estética)*/


/*Sonido aleatorio*/
    var numImag = Math.floor(Math.random() * (4)) + 1; 
    var contador = 0;
    var contador2 = 0;

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
        $("#mal").fadeOut(1000);
        $("div:hidden").delay(1500).fadeIn(1500);
    });
    };

    if (contador != 1){
        $("div").fadeOut(1000);
        $("#mal:hidden").delay(1500).fadeIn(1500);
    };
    
    }


/*Evento hacer sonar audio*/
    $("#audio").click(function() {
        contador2++;

        if (contador2 == 1) {

            if (numImag == 1) {
        	   $("#audio").append("<audio src= sonidos/gallo.mp3 autoplay='True' />"); /*Añade la etiqueta audio después de la id indicada*/
               
        	   $("#div4").click(function(){
                BienHecho();
               });
               $("#div1").click(function(){
                MalHecho();
               });
               $("#div2").click(function(){
                MalHecho();
               });
               $("#div3").click(function(){
                MalHecho();
               });

            };
            if (numImag == 2) {
                $("#audio").append("<audio src= sonidos/vaca.mp3 autoplay='True' />"); /*Añade la etiqueta audio después de la id indicada*/
                
                $("#div3").click(function () {
                    BienHecho();
                });
                $("#div1").click(function(){
                MalHecho();
                });
                $("#div2").click(function(){
                MalHecho();
                });
                $("#div4").click(function(){
                MalHecho();
                });
            };
            if (numImag == 3) {
                $("#audio").append("<audio src= sonidos/cerdo.mp3 autoplay='True' />"); /*Añade la etiqueta audio después de la id indicada*/
                
                $("#div1").click(function(){
                    BienHecho();
                });
                $("#div4").click(function(){
                MalHecho();
                });
                $("#div2").click(function(){
                MalHecho();
                });
                $("#div3").click(function(){
                MalHecho();
                });
            };
            if (numImag == 4) {
                $("#audio").append("<audio src= sonidos/oveja.mp3 autoplay='True' />"); /*Añade la etiqueta audio después de la id indicada*/
                
                $("#div2").click(function(){
                    BienHecho();
                });
                $("#div1").click(function(){
                MalHecho();
                });
                $("#div4").click(function(){
                MalHecho();
                });
                $("#div3").click(function(){
                MalHecho();
                });
            };

        	$("div:hidden").fadeIn(1500); /*Hace aparecer las div ocultas*/
        	$("#contenedor").css("margin-top", "40px"); /*Propiedad CSS para que, después del click, el pulsador se mantenga en su sitio*/
        };
    });

   
    

});

