/*Variables de las instancias que ocuparemos usando el método "require".*/
var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var obfuscate = require("gulp-obfuscate");

/*Objeto de las rutas (sources) que usaremos,el asterisco indica que buscara todos los archivos de ese tipo, tambien los astericos dobles indica que no importa la profundidad de las carpetas nos traera los archivos que termina en (Ej. .html)*/
var rutas = {
	rutaJS: 'src/assets/js/*.js',
	rutaSCSS: 'src/assets/scss/*.scss',
	rutaHTML: 'src/*.html'
}

/*escribimos primera tarea,consta de una entrada, que dira de donde obtenemos el archivo fuente un proceso realizado através del metodo pipe que indicarará que se quiere hacer y una salida igualmente transportada por un pipe que dira donde se quiere colar esta información. esta tarea esta dedicada a realizar un archivo de js  que se utilizará en producción y se guardará en carpeta public */
	
gulp.task("trabajandoJS", function(){
     gulp.src(rutas.rutaJS)
	 .pipe(uglify())
	 .pipe(obfuscate())
	 .pipe(gulp.dest('public/js/creado'));
	 
})

/*esta segunda tarea esta designada para realizar un archivo en carpeta public igualmente que será utilizado en producción, la diferencia es que no tiene un proceso a ejecutar, solamente se ejecuta para poder crear  el archivo.*/
/*referente a la sintaxis */
gulp.task("trabajandoHTML", function(){
     gulp.src(rutas.rutaHTML)
	 .pipe(gulp.dest('public'));

		   })
		   
/*esta tercer tarea tiene como objetivo realizar el mismo mecanismo de traducir el archivo scss a css, esto se logra através de outputStyle, y por ultimo, la etapa de salida donde  através de gulp.dest decimos a donde se iran estos cambios*/
gulp.task("trabajandoSCSS", function(){
     gulp.src(rutas.rutaSCSS)
	.pipe(sass({outputStyle: 'compressed'})
	.on('error', sass.logError))
	.pipe(gulp.dest('public/css/creado'));
	 
})

/*esta siguente tarea tiene dos objetivos, el primero es inicializar el servidor ( por lo cual ya no es necesario utilziar express) y despues le dice a gulp que va a estar checando las acciones realizadas en esta ruta y que se le ejecute la tarea sass-watch (que esta abajo) */
gulp.task("watchChangesCSS", function(){
	browserSync.init({
		server:{
			baseDir: "./public"
		}
	});
	gulp.watch(rutas.rutaSCSS ,["sass-watch"])
});
/*esta tarea hace referencia que con base a la tarea de arriba esta se encargará de recargar el servidor para que los cambios efectuados tambien se reflejen en la pagina sin tener que cargar de nuevo*/

gulp.task("sass-watch",["trabajandoSCSS","trabajandoHTML"],function(){
	browserSync.reload();
})


