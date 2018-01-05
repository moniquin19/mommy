<<<<<<< 2d5dcd4f5c9ecfe8dd66ee2f66e8cdef727d329f
//Caracteristicas de formulario inicial
=======

/* Caracteristicas de formulario inicial*/
>>>>>>> agregando cambios
$(function () {
    $('.button-checkbox').each(function () {
        let $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });

        $checkbox.on('change', function () {
            updateDisplay();
        });

        function updateDisplay() {
<<<<<<< 2d5dcd4f5c9ecfe8dd66ee2f66e8cdef727d329f
            let isChecked = $checkbox.is(':checked');
            // establecer el estado del botón
            $button.data('state', (isChecked) ? "on" : "off");

            //establecer el ícono del botón
=======
            var isChecked = $checkbox.is(':checked');
            // Establecer el estado del boton
            $button.data('state', (isChecked) ? "on" : "off");

            // Establecer el Estado del icono
>>>>>>> agregando cambios
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

<<<<<<< 2d5dcd4f5c9ecfe8dd66ee2f66e8cdef727d329f
            //actualizar el color del boton
=======
            // Actualiza el color del botón
>>>>>>> agregando cambios
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            } else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        function init() {
            updateDisplay();
<<<<<<< 2d5dcd4f5c9ecfe8dd66ee2f66e8cdef727d329f
            //Tildar si corresponde
=======
            // Inyectar el icono si corresponde
>>>>>>> agregando cambios
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});
var idPin = 0;

//Función principal
$(document).ready(function () {
<<<<<<< 2d5dcd4f5c9ecfe8dd66ee2f66e8cdef727d329f
    $("#nav-bar").hide();
    /**Al hacer click en el boton acceder, se oculta el formulario e
    ingresamos a la pagina principal*/
=======

   $("#btn-agregar").click(function () {
       
   
    
    var tema = $("#tituloInput").val();
    var descripcion = $("#descripcionInput").val();
    var url = $("#urlInput").val();




    $("#nuevos-temas").append("<div id='pin_" + idPin + "' class='pin col-xs-12 col-sm-12 col-md-3'>" +

        "<div class='panel panel-success front'>" +
        "<div class='panel-heading'>" +
        "<h3 class='panel-title'>" + tema + "</h3>" +
        "</div>" +
        "<div class = 'panel-body' >" +
        "<a href='#' class='thumbnail'>" +
        "<img src='" + url + "' alt='...'>" +
        "</a>" +
        "</div>" +
        "<div class = 'panel-footer' >" + descripcion + "</div> </div>")


    $("#tituloInput").val("");
    $("#descripcionInput").val("");
    $("#urlInput").val("");
});

$("#nav-bar").hide();
    /*Al  hacer click en el formulario inicial, que se esconda el fomulario y se muestre
    la barra de navegación global, dando acceso a la página principal*/
>>>>>>> agregando cambios
    $("#ingresar").on("click", function () {
        $("#nav-bar").show();
        $("#home").show();
        $("#registro").hide()
    })
/*Al hacer click en perfil, se abre perfil del usuario*/
    $("#perfil").click(function () {
        window.location = "profile.html"
    })  
})
<<<<<<< 2d5dcd4f5c9ecfe8dd66ee2f66e8cdef727d329f
    //Ocultar los  temas  de la pagina de registro
    $("#home").hide();

    //Area de post
=======
   /*Al hacer click en temas, se abre una vista donde el usuario puede postear temas de interés*/
    $("#home").hide();

    /* Area de post en la vista profile*/
var post = document.getElementById('post');
>>>>>>> agregando cambios

$("#npost").on('click', function(){
    //tomar texto ingresado en el textarea
    let comments = document.getElementById('comment').value;

    //limpiar el textarea
    document.getElementById('comment').value = '';

    //contenedor en el html
    let cont = document.getElementById('cont');

    //creacion del div que contiene cada comentario
    let newComments = document.createElement('div');

    //validacion de  textarea con mensaje
    if(comments.length == 0 || comments == null) {
        alert('Por favor ingresar un mensaje');
        return false;
    }
    //creacion del checkbox
    let chck = document.createElement('input');
    chck.type = 'checkbox';
    //creacion icono de heart
    let heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart', 'heart');
    //creacion icono de basura
    let trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    //nodos de texto del textarea
    var textNewComment = document.createTextNode(comments);

    let contenedorElemento = document.createElement('p');
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(chck);
    newComments.appendChild(trash);
    newComments.appendChild(heart);
    newComments.appendChild(contenedorElemento);

    cont.appendChild(newComments);
    //evento que al hacer click le agrega color rojo al corazón
    heart.addEventListener('click', function(){
        heart.classList.toggle('red');
    })
    //evento que al hacer click remueve el div del comentario completo
    trash.addEventListener('click', function(){
        cont.removeChild(newComments);
    })
    //evento de adjutar tachado al párrafo al hacer click en checkbox
    chck.addEventListener('click', function(){
        contenedorElemento.classList.toggle('strike-out'); //agrego clase tachado a parrafo contenedor de comentarios, se activa al hacer click, toggle es como un switch, agrega y quita sucesivamente
    })

}) 

<<<<<<< 2d5dcd4f5c9ecfe8dd66ee2f66e8cdef727d329f
//link a mis fotos 
    $("#theme").click(function () {
=======
/*Al hacer click en temas, se abre una vista donde el usuario puede postear temas de interés*/
    $("#theme-1").click(function () {
>>>>>>> agregando cambios
        window.location = "picture.html";
        
    }) 
<<<<<<< 2d5dcd4f5c9ecfe8dd66ee2f66e8cdef727d329f
//fin  link fotos 

// Inicio carga Fotos 
/** Al  hacer Click en el boton agregar fotos, se muestra un formulario
con inputs que permiten ingresar informacion al panel que contendrá a la fotografía que se 
cargará desde una dirección web */   
    $("#btn-agregar").on('click', function () {

        $("#info-fotos").css("display","block");

            let tema = $("#tituloInput").val();
    let descripcion = $("#descripcionInput").val();
    let url = $("#urlInput").val();



       $("#nuevas-fotos").append("<div id='pin_" + "' class='pin col-xs-12 col-sm-12 col-md-3'>" +
            
            "<div class='panel panel-success front'>" +
            "<div class='panel-heading'>" +
            "<h3 class='panel-title'>" + tema + "</h3>" +
            "</div>" +
            "<div class = 'panel-body' >" +
            "<a href='#' class='thumbnail'>" +
            "<img src='" + url + "' alt='...'>" +
            "</a>" +
            "</div>" +
            "<div class = 'panel-footer' >" + descripcion + "</div> </div>")
            
            
    $("#tituloInput").val("");
    $("#descripcionInput").val("");
    $("#urlInput").val("");

    
    })
/** De cada item del formulario, se obtendrá el texto que ingresará el usuario
y generamos las variables correspondientes*/ 
    

//fin de carga fotos
=======

    $("#theme-2").click(function () {
        window.location = "picture.html";
       
    })

/*Al hacer click en amigos, se abre una vista donde el usuario puede visualizar a sus amigos*/
$("#friends-1").click(function () {
    window.location = "friends.html"
})

$("#friends-2").click(function () {
    window.location = "friends.html";
  
})



>>>>>>> agregando cambios
