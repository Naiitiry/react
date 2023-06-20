/*2 maneras de importar HTTP
método 1
const http = require ("http");

método 2*/
import http from "http" /*-> lo que pasa es que va a dar error porque usa (NODE) "require", tengo que avisar a 
package.json para que no falle -> "type":"module" en el .json*/

const port = 3030;
const server = http.createServer((req,res)=>{

    res.statusCode=200;
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Hola desde el servidor</h1>")

})

server.listen(port,()=>{
    console.log(`Corriendo el servidor desde el puerto: ${port}`);
})


