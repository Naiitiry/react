import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"

const url = "http://localhost/8000/posts/"

const ShowPost = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        getPosts()
    },[])

    //Procedimiento para traer a todos los posts.

    const getPosts = async() =>{
        const res = await axios.get(url) //elemento de http "get"
        setPosts(res.data)
    }

    //Procedimiento para eliminar 1 post.

    const deletePost = async(id)=>{
        await axios.delete(`${url}${id}`)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <small>CREATE POST</small>
                    <Link to="/create" className="btn btn-primary mt-2 mb-2" ><i class="fa-regular fa-plus"></i></Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post)=>{
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.content}</td>
                                    <td>
                                        <Link to={`/edit/${post.id}`} className="btn btn-info"><i className="fas fa-edit"></i></Link>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ShowPost