/* Caracteristicas de formulario inicial*/
$(function () {
    $('.button-checkbox').each(function () {
        var $widget = $(this),
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
            var isChecked = $checkbox.is(':checked');
            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
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
            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});

/*Función principal*/
$(document).ready(function () {
    $("#nav-bar").hide();
    /*Al hacer click en el boton acceder, se oculta el formulario e
    ingresamos a la pagina principal*/
    $("#ingresar").on("click", function () {
        $("#nav-bar").show();
        $("#home").show();
        $("#registro").hide()
    })

    $("#perfil").click(function () {
        window.location = "profile.html"
    })  
})
    /*Ocultar los  temas  de la pagina de registro*/
    $("#home").hide();

    // Area de post

$("#npost").on('click', function(){
    //tenemos que tomar el texto ingresado en el textarea
    var comments = document.getElementById('comment').value;

    //limpiar el textarea
    document.getElementById('comment').value = '';

    //contenedor que esta en el html
    var cont = document.getElementById('cont');

    //creamos el div que contiene cada comentario
    var newComments = document.createElement('div');

    //validar que textarea tenga un msje
    if(comments.length == 0 || comments == null) {
        alert('Debes ingresar un mensaje');
        return false;
    }
    //crear checkbox
    var chck = document.createElement('input');
    chck.type = 'checkbox';
    //creamos icono de corazon
    var heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart', 'heart');
    //creamos icono de basura
    var trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    //nodos de texto del textarea
    var textNewComment = document.createTextNode(comments);

    var contenedorElemento = document.createElement('p');
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
    //evento que agrega tachado al párrafo al hacer click en el checkbox
    chck.addEventListener('click', function(){
        contenedorElemento.classList.toggle('strike-out'); //agrego clase tachado a parrafo contenedor de comentarios, se activa al hacer click, toggle es como un switch, agrega y quita sucesivamente
    })

}) //fin de post


// link a mis fotos ------------------------------------------------------->
    $("#theme").click(function () {
        window.location = "picture.html";
        $("#nav-bar").show();
    }) 
// fin  link fotos ------------------------------------------------------->

// Inicio carga Fotos ------------------------------------------------------->
/*Al  hacer Click en el boton agregar fotos, se muestra un formulario
con inputs que permiten ingresar informacion al panel que contendrá a la fotografía que se 
cargará desde una dirección web*/   
    $("#btn-agregar").on('click', function () {

        $("#info-fotos").css("display","block");

            var tema = $("#tituloInput").val();
    var descripcion = $("#descripcionInput").val();
    var url = $("#urlInput").val();



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
/* De cada item del formulario, se obtendrá el texto que ingresará el usuario
y generamos las variables correspondientes*/ 
    
function savePin() {



}

// fin de carga fotos ------------------------------------------------------->