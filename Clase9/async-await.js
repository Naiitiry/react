const getNameAsync=(nameId)=>{
    try{
        let rePost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        let post = await rePost.json();
    } catch(error){
        console.log(error);
    }
}

getNameAsync(49);