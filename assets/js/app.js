//Funcionalidad del carousel
$('.carousel.carousel-slider').carousel({fullWidth: true});

//Funcionalidad del boton Continuar seccion Registro
var $telefono = $('#telefonoRegistro');
var $botonContinuar = $('#botonContinuarRegistro');
var $checkbox = $('#test5');
var $digitosTelefono = 0;
var $terminos = 0;

function validarNumeroRegistro(e){
    e.preventDefault();
    var digitosCorrectos = $telefono.val().length;
    
    if(digitosCorrectos == 10 && $checkbox.is(":checked")){
        $botonContinuar.removeClass("disabled");
    }
    else{
        $terminos = false;
        return $terminos;
    }
};

$telefono.keyup(validarNumeroRegistro);
$checkbox.change(validarNumeroRegistro);

//Funcionalidad de contador en sección Codigo
var tiempo = 21;
var contar;

function reintentar(){
    $("#reinicio").html("Reintentar en"+'<img src="../assets/img/icons/clock.png" class="iconoReloj responsive-img"/>'  + tiempo);
    tiempo --;
        if(tiempo == 0){
        comenzar(contar);
        location.href = "codigo.html"
    }
    contar = setTimeout(reintentar,1000);
}

function comenzar(contar){
    clearTimeout(contar)
}
$(document).ready(reintentar);
