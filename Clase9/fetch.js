const getNameFetch = (idPost) => {
    try{
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then ((res)=>{
                // console.log(res);
                return res.json();
            })
            .then((post)=>{
                console.log(post)
            })
    } catch(error){
        console.log(error);
    }
};

getNameFetch(49)