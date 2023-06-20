let nombre="Marcos";
console.log(nombre.length);

let edad=33;
let numero=32;
let numero2="25";

console.log(edad==numero2);
console.log(edad===numero2);

console.log(edad==numero2 && edad>numero);
console.log(edad==numero2 || edad>numero);

if (edad>18){
    console.log("Genial, sos mayor!");
}else{
    console.log("No llegás al limite de edad perri");
}

let pelicula = "green lentern"


if(pelicula=="LOTR"){
    console.log("Es mi pelicula favorita");
}else{
    console.log("No es mi peli favorita");
}

//if ternario


let resultado = pelicula == "LOTR"?"Es mi pelicula favorita":"No es mi pelicula favorita"

console.log(resultado);


function saludar(){
    console.log("Hola viteh");
}

saludar()

function sumar(numero33,numero34){
    console.log(numero33 + numero34);
}

sumar(33,25)

