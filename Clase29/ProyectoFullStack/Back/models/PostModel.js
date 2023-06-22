// importamos la base de datos.
import db from "../database/db.js"
// importamos DataType = configurar tipos de datos.
import { DataTypes } from "sequelize"
/*
Creamos una variable y definimos: 
1: como se llama la tabla.
2: poner el objeto {} (se refiere al contenido de la tabla como título y contenido).

lo que hay en la tabla como ID, fecha de creación y actualización
se actualizan automaticamente, no es necesario cargarlo para rellenar.
*/

const PostModel = db.define("blog",{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING}
})

export default PostModel;