const express = require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")
const sales = require("./routes/sales")

app.use('/api',productos) //Sujeto a decisión (ruta del navegador)
app.use('/api',sales)



module.exports = app;

