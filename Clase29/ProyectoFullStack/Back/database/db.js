import { Sequelize } from "sequelize";

/* 
Primero: Nombre de la BD
Segundo: user
Tercero: contraseña
Cuarto: {host(donde está alojado), lenguaje y puerto}

Esto es un representación de las credenciales para la Base de Datos.
 */
const db = new Sequelize("socialmedia23309","root","",{
    host:"localhost",
    dialect:"mysql",
    port:3306
})

export default db;