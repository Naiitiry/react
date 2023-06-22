// Importo el modelo
import PostModel  from "../models/PostModel.js";

//                          Métodos del CRUD

// CREATE READ UPDATE DELETE

// Muestra todos los registros en la BD. READ
export const getAllPosts=async(req,res)=>{
    try {
        const posts = await PostModel.findAll()
        res.json(posts)
    } catch (error) {
        res.json({message:error.message})
    }
}

// Muestra 1 registro de la BD. READ
export const getPost = async(req,res)=>{
    try {
        // implementar método que me envie un registro por su id
        const post = await PostModel.findAll({
            where:{id:req.params.id}
            // envía la info de la id que dí PERO continua abajo (o donde sea) con el resto de la tabla, etc.
        })
        res.json(post[0])
    } catch (error) {
        res.json({message:error.message})
    }
}

// Crear 1 registro. CREATE
export const createPost = async(req,res)=>{
    try {
        await PostModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente."
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

// Actualizo un post. UPDATE
export const updatePost = async(req,res)=>{
    try {
    await PostModel.update(req.body,{
        where:{id:req.params.id}
    })
    } catch (error) {
        res.json({message:error.message})
    }
}

// Eliminar registro. DELETE

export const deletePost = async (req,res)=>{
    try {
        await PostModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente."
        })
    } catch (error) {
        res.json({message:error.message})
    }
}