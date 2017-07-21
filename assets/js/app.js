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
        generarCodigoRegistro();
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
//var contar;

function reintentar(){
    $("#reinicio").html("Reintentar en"+'<img src="../assets/img/icons/clock.png" class="iconoReloj responsive-img"/>'  + tiempo);
    tiempo --;
        if(tiempo == 0){
        comenzar(contar);
        location.href = "codigo.html"
    }
    //contar = setTimeout(reintentar,3000);
}

/*function comenzar(contar){
    clearTimeout(contar)
}*/
$(document).ready(reintentar);

//Funcionalidad del boton Crear seccion Crear Cuenta
//***No funciona aún***
var $nombre = $('#icon_prefix');
var $correo = $('#email');
var $password = $('#password');
var $botonCrearCuenta = $('#botonCrearCuenta');


function validarDatos(){
    var datoNombre = $nombre.val();
    var datoMail = $correo.val();
    var datoContraseña = $password.val();
    
    if(datoNombre != " " && datoMail != " " && datoContraseña != " "){
        $botonCrearCuenta.removeClass("disabled");
    }
    else{
        return alert("Todos los campos son necesarios");
    }
};

validarDatos();
 
//Funcionalidad de enviar a otra seccion desde la seccion Registro Listo
function redireccionar(){
    setTimeout("location.href='../vistas/tarjeta.html'", 3000);
}

//Extraer código de la API para la seccion de Codigo posterior al Registro


function generarCodigoRegistro(){
   
   var $phone = $("#telefonoRegistro").val();
   var $therms = $("#test5").val(); 
    
   $.post("http://localhost:3000/api/registerNumber",{
    "phone": $phone, "therms": $therms
   }).then(function(response){
       console.log(response);
   }).catch(function(error){
       console.log(error);
   })
};


    


