'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos de Rutas
var project_routes = require('./rutes/project');


//middlewares son los metodos que se ejecutan antes
//de ejecutar el resultado de la peticion

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//Cualquier cosa que llegue la convierte en JSON

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
/*app.get('/', (req, res) =>{
    res.status(200).send(
        "<h1>Pagina de Inicio</h1>"
    )
});
app.post('/test/:id', (req, res) =>{
    console.log(req.body.Nombre);
    console.log(req.query.web);
    console.log(req.params.id);
    res.status(200).send({
        message: "Hola mundo desde mi API"
    })
});*/
app.use('/api', project_routes);

//Exportar
module.exports = app;
