/* Express me permite levantar muchisimo mas rápido el servidor que el nativo Node */

import express from "express" // importo express

const app = express()// traigo todos los métodos de express.

const port = 3000; // definimos el puerto.

app.get("/",(req,res)=>{
    res.send("Estás en el index.")
});

/*          defino rutas            */

app.get("/contacto",(req,res)=>{
    res.end("Estás en el contacto.")
});

app.listen(port,()=>{
    console.log(`Server OK, en el puerto ${port}`);
})