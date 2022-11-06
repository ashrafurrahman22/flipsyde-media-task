import { useEffect, useState } from "react";

const usePosts = () =>{
    const [posts, setPosts] = useState([]);

    useEffect( ()=>{
        fetch('https://nameless-river-47121.herokuapp.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    } , [posts])
    return [posts, setPosts];
}

export default usePosts;