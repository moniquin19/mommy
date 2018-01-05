let idPin = 0;
//Carga de documento y principales funciones
$(document).ready(function () {
  $("#nav-bar").hide();
  /**Al hacer click en el boton acceder, se oculta el formulario e
  ingresamos a la pagina principal*/
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
//Ocultar los  temas  de la pagina de registro
$("#home").hide();

//Area de post en profile

$("#npost").on('click', function () {
  //tomar texto ingresado en el textarea
  let comments = document.getElementById('comment').value;

  //limpiar el textarea
  document.getElementById('comment').value = '';

  //contenedor en el html
  let cont = document.getElementById('cont');

  //creacion del div que contiene cada comentario
  let newComments = document.createElement('div');

  //validacion de  textarea con mensaje
  if (comments.length == 0 || comments == null) {

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
  heart.addEventListener('click', function () {
    heart.classList.toggle('red');
  })
  //evento que al hacer click remueve el div del comentario completo
  trash.addEventListener('click', function () {
    cont.removeChild(newComments);
  })
  //evento de adjutar tachado al párrafo al hacer click en checkbox
  chck.addEventListener('click', function () {
    contenedorElemento.classList.toggle('strike-out'); //agrego clase tachado a parrafo contenedor de comentarios, se activa al hacer click, toggle es como un switch, agrega y quita sucesivamente
  })

})

//Al hacer click en temas, se abre una vista donde el usuario puede postear temas de interés
$("#theme-1").click(function () {
  window.location = "picture.html";

})

$("#theme-2").click(function () {
  window.location = "picture.html";

})

/*Al hacer click en amigos, se abre una vista donde el usuario puede visualizar a sus amigos*/
$("#friends-1").click(function () {
  window.location = "friends.html"
})

$("#friends-2").click(function () {
  window.location = "friends.html"
})


/**Al hacer click en el boton agregar del formulario 
 vista temas, se agregará un panel con imagen y los valores
 del texto ingresados en los  inputs  y generamos
 las variables correspondientes */

$("#btn-agregar").click(function () {
  let tema = $("#tituloInput").val();
  let descripcion = $("#descripcionInput").val();
  let url = $("#urlInput").val();

  $("#nuevos-temas").append("<div id='pin_" + "' class='pin col-xs-12 col-sm-12 col-md-3'>" +

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

//Añadiendo elementos al formulario inicial
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
      let isChecked = $checkbox.is(':checked');
      // establecer el estado del botón
      $button.data('state', (isChecked) ? "on" : "off");

      //establecer el ícono del botón
      $button.find('.state-icon')
        .removeClass()
        .addClass('state-icon ' + settings[$button.data('state')].icon);

      //actualizar el color del boton
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
      //Tildar si corresponde
      if ($button.find('.state-icon').length == 0) {
        $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
      }
    }
    init();
  });
});

