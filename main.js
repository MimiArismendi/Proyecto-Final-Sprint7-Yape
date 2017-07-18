var express = require("express"); /*requerimos express porque instalamos express como dependencia, es un servidos de JS*/
var path = require("path");
var app = express();/*ejecutamos express y se guarda en 1 variable*/

/*data es la ruta*/
/*app.use va a decir que hay una carpeta en algún lugar, y que pueden hacer uso de esa carpeta y sus archivos*/
/*express static, hacer una ruta estática de algunos archivos - los de la carpeta- */
/*Path - para enviar archivos como video, etc */
app.use("/api", express.static(path.join(__dirname, '/api')));
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use("/assets", express.static(path.join(__dirname, '/assets')));
app.use("/img", express.static(path.join(__dirname, '/img/icons')));


/*respuesta que nos da para entrar al index - verbos http GET-> mandar el index y obtener 1 respuesta en objeto*/
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000); /*el servidor está en ese puerto*/