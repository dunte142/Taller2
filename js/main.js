$(document).ready(function(){  /* hace las acciones despues de que cargue la pagina */

    $(".Formulario-Completado").hide()

    $(".boton-form").click(function(event){  /* Cuando se hace click en el boton se esconde el formulario */ 

        event.preventDefault(); /* para que no se recargue la pagina */ 

        var nombre = $("#nombre").val();
        var correo = $("#correo").val();

        $("#nombre-R").text(nombre);
        $("#correo-R").text(correo);

        $(".Formulario-Sin-Completar").hide()  /* Esto esconde el formulario */
        $(".Formulario-Completado").show()


    });



});

