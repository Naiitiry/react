/*
Otra manera de cargar express es:
            const express = require("express")
*/
import express from "express"; // importo express
import cors from "cors"
import db from "./database/db.js"
import PostRouter from "./routes/PostRouter.js"

const app = express()// traigo todos los métodos de express.
const port = 8000; // definimos el puerto.

app.use(cors())
app.use(express.json())

app.use("/posts",PostRouter)

// Chequeamos la conexión de la BD

try{
    await db.authenticate()
    console.log(`Conexión exitosa a la DB.`);
} catch(error){
    console.log(`Conexión fallida a la DB, error: ${error}`);
}

app.listen(port,()=>{
    console.log(`Server OK, en el puerto ${port}`);
})